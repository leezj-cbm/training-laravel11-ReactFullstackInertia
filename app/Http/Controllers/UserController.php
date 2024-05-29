<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function register(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['created_at'] = time();
        $data['updated_at'] = time();
        $data['password'] = bcrypt($data['password']);
        $data['updated_at']=time();
        $user = User::create($data);
        $token = $user->createToken('PassportAuth')->accessToken;
        return response()->json(['token'=>$token],200);
    }

    //~ createToken has issue!
    // public function login(Request $request){
    //     $data =[
    //         'email'=> $request->email,
    //         'password'=> $request->password,
    //     ];

    //     if (auth()->attempt($data)){
    //         $token = auth()->user()->createToken('PassportAuth')->accessToken;
    //         return response()->json(['token'=>$token],200);
    //     }else {
    //         return response()->json(['error'=>'Unauthorized'],401);
    //     }
    // }
    
    public function userInfo(){
        $user=auth()->user();
        return response()->json(['user'=>$user],200);
    }



    public function index()
    {
        //
        $query = User::query();
        $sortFields = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");
        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("email")) {
            $query->where("email", request("email"));
        }
        $users = $query->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("User/Index", [
            'users' => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'routing' => 'user.index',
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia("User/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        //
        $data = $request->validated();
        $data['created_at'] = time();
        $data['updated_at'] = time();
        $data['password'] = bcrypt($data['password']);
        $data['updated_at']=time();
        Log::info('UserController:store=> ' . json_encode($data));
        User::create($data);
        return to_route('user.index')->with('success', 'The user:' . (string)$request->name . ' was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {   
        Log::info("UserController::edit , received from FrontEnd: ".Json_encode($user));
        Log::info("UserController::edit sending userResource to Edit Page: ".Json_encode(new UserResource($user)));
        return inertia("User/Edit", [
            'user'=> new UserResource($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
        $data = $request->validated();
        $password = $data['password']?? null;
        if ($password){
            $data['password'] = bcrypt($data['password']);
        }else{
            unset($data['password']);
        }
        $data['updated_at']=time();
        $user->update($data);
        return to_route('user.index')->with("success","User ".(string)$request->name." was succesfully updated!");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
        $user->delete();
        Log::info("UserController:destroy, deleted user ".Json_encode($user));
        return to_route("user.index")->with('success','User '.(string)$user->name." was successfully deleted !");
    }
}
