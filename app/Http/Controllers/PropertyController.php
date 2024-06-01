<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Http\Resources\AssetResource;
use App\Http\Resources\PropertyResource;
use App\Models\Asset;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $query = Property::query();

        $sortFields = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");
        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }
        $properties = $query->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        //Log::info('Sort field: ' . (string)$sortFields . " , sortDirection: " . (string)$sortDirection);
        return inertia("Property/Index", [
            "properties" => PropertyResource::collection($properties),
            'queryParams' => request()->query() ?: null, // Note A : if empty array then pass null! the front end will handle null!
            'routing' => 'property.index',
            'success'=> session('success'),
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia("Property/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertyRequest $request)
    {
        //
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
        $image=$data['image']?? null;
        $data['created_by']= Auth::id();
        $data['updated_by']= Auth::id();
        if ($image){
           $data['img_path']= $image->store('property/'.Str::random(),'public');
           Log::info("PropertyController:store=> Found image");
        }
        Log::info('PropertyController:store=> '.json_encode($data));
        Property::create($data);
        return to_route('property.index')->with('success','The property:'.(string)$request->name.' was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        $query = $property->assets();
        $sortFields = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");
        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }
        $assets = $query->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);


        return inertia('Property/Show',[
            'property'=> new PropertyResource($property),
            'assets'=> AssetResource::collection($assets),
            'queryParams'=>request()->query()?:null,
            //'routing'=> 'task.index',
        ]);


    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        //
        return inertia('Property/Edit',[
            'property'=> new PropertyResource($property),

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertyRequest $request, Property $property)
    {
        //
        $data = $request->validated();
        //dd($data);
        $image=$data['image']?? null;
        $data['updated_by']= Auth::id();
        if ($image){
            if($property->img_path){
                Storage::disk('public')->deleteDirectory(dirname($property->img_path));
            }
            $data['img_path']= $image->store('property/'.Str::random(),'public');
            Log::info("PropertyController:update=> Found image");
         }
         $property->update($data);
         Log::info('PropertyController:update=> '.json_encode($data));
         return to_route('property.index')->with('success','The property:'.(string)$request->name.' was updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
        $property->delete();
        if($property->img_path){
            Storage::disk('public')->deleteDirectory(dirname($property->img_path));
            Log::info("PropertyController:destroy, deleted picture ".Json_encode($property->img_path));
        }
        Log::info("PropertyController:destroy, deleted property ".Json_encode($property));
        return to_route('property.index')->with('success','Property '.(string)$property->name.' was deleted!');
    }


}
