<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $query = Project::query();

        $sortFields = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");
        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }
        $projects = $query->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        //Log::info('Sort field: ' . (string)$sortFields . " , sortDirection: " . (string)$sortDirection);
        return inertia("Project/Index", [
            "projects" => ProjectResource::collection($projects),
            'queryParams' => request()->query() ?: null, // Note A : if empty array then pass null! the front end will handle null!
            'routing' => 'project.index',
            'success'=> session('success'),
        ]);
    }

    /*
        Breakdown: request()->query():
        This function retrieves all query parameters from the current HTTP request as an associative array. 
        For example, if the URL is http://example.com/projects?name=abc&status=active, the query parameters would be ['name' => 'abc', 'status' => 'active'].
        ?:null:

        This is the null coalescing operator in PHP. It means that if request()->query() returns an empty 
        array (i.e., no query parameters were provided), it will instead set queryParams to null.
        Purpose:
        Avoid sending an empty array: If there are no query parameters, sending an empty array might not be 
        desirable. By setting queryParams to null when there are no parameters, the frontend can handle this 
        case more gracefully.
        Frontend Handling: The comment suggests that the frontend is designed to handle null for query 
        parameters. This likely means it won't attempt to parse or display filter/sorting options if 
        none were provided.

        Key Differences
        Scope of Data Access:

        request()->query(): Accesses only the query parameters from the URL.    
        request(): Accesses the entire HTTP request, including query parameters, form data, headers, etc.
        Return Type:

        request()->query(): Returns an associative array of query parameters.
        request(): Returns an instance of the Illuminate\Http\Request object.
        Usage Context:

    */

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia("Project/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        //
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
        $image=$data['image']?? null;
        $data['created_by']= Auth::id();
        $data['updated_by']= Auth::id();
        if ($image){
           $data['img_path']= $image->store('project/'.Str::random(),'public');
           Log::info("ProjectController:store=> Found image");
        }
        Log::info('ProjectController:store=> '.json_encode($data));
        Project::create($data);
        return to_route('project.index')->with('success','The project:'.(string)$request->name.' was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $query = $project->tasks();
        $sortFields = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");
        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }
        $tasks = $query->orderBy($sortFields, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);


        return inertia('Project/Show',[
            'project'=> new ProjectResource($project),
            'tasks'=> TaskResource::collection($tasks),
            'queryParams'=>request()->query()?:null,
            'routing'=> 'task.index',
        ]);


    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
        return inertia('Project/Edit',[
            'project'=> new ProjectResource($project),

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
        $data = $request->validated();
        //dd($data);
        $image=$data['image']?? null;
        $data['updated_by']= Auth::id();
        if ($image){
            if($project->img_path){
                Storage::disk('public')->deleteDirectory(dirname($project->img_path));
            }
            $data['img_path']= $image->store('project/'.Str::random(),'public');
            Log::info("ProjectController:update=> Found image");
         }
         $project->update($data);
         Log::info('ProjectController:update=> '.json_encode($data));
         return to_route('project.index')->with('success','The project:'.(string)$request->name.' was updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
        $project->delete();
        if($project->img_path){
            Storage::disk('public')->deleteDirectory(dirname($project->img_path));
            Log::info("ProjectController:destroy, deleted picture ".Json_encode($project->img_path));
        }
        Log::info("ProjectController:destroy, deleted project ".Json_encode($project));
        return to_route('project.index')->with('success','Project '.(string)$project->name.' was deleted!');
    }


}
