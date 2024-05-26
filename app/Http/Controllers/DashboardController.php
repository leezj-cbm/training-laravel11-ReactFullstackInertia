<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    //
    public function index(){
        $projNum = Project::count();
        $taskNum= Task::count();
        $userNum = User::count();
        
        $taskPend = Task::query()->where("status","pending")->count();
        $taskInProg = Task::query()->where("status","pending")->count();
        $taskComp = Task::query()->where("status","pending")->count();

        Log::info("projNum=".(string)$projNum." taskNum=".(string)$taskNum." userNum=".(string)$userNum);

        return inertia("Dashboard",[
            'projNum'=>$projNum,
            'taskNum'=>$taskNum,
            'userNum'=>$userNum,
            'taskPend'=>$taskPend  ,
            'taskInProg'=>$taskInProg,
            'taskComp'=>$taskComp ,
        ]);
    }
}
