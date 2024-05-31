<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Exception;
use Illuminate\Support\Facades\Log;

class ProjectAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $query = Project::all();
        $total= $query->count();
        Log::info("ProjectAPIController::index ,total=".$total." projects=".$query);
        return response()->json($query);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        //
        $data = $request->validated();

        //hard coded due to migration limitation
        $data['created_at']= time();
        $data['updated_at']= time();
        Log::info("ProjectAPIController::store , received data".json_encode($data));
        Project::create($data);
        Log::info("ProjectAPIController::store , succesfully created the project".json_encode($data));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Query style, only suitable for searching other parameters
        // $project = Project::query()->where("id",$id)->first();
        $project = ProjectAPIController::findById($id);
        return response()->json($project);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, string $id)
    {
        //
        $data = $request->validated();
        $currProject =ProjectAPIController::findById($id);
        $currProject['name']= $data['name'];
        if($data['description']){
            $currProject['description']= $data['description'];
        }
        if($data['due_date']){
            $currProject['due_date']= $data['due_date'];
        }
        $currProject['status']= $data['status'];
        if($data['updated_by']){
            $currProject['updated_by']= $data['updated_by'];
        }
        $currProject['updated_at']= time();
        $currProject->update();
        Log::info("ProjectAPIController::show , id=".$id.", successfully updated project=".$currProject);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $project = ProjectAPIController::findById($id);
        $project->delete();
        Log::info("ProjectAPIController::show , successfully deleted project=".$project);

    }

    private function findById($id){
        try{
            $project=Project::find($id);
            if ($project == null){
                throw new Exception("Could not find the project ".$id);
            }
        }catch(Exception $e){
            Log::info($e);
            return response()->json("There was an issue:".$e,404);
        }
        Log::info("ProjectAPIController::show , found project=".$project);
        return $project;
    }
}
