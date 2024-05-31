<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Project;
use App\Models\Property;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    //
    public function index(){
        $propNum = Property::count();
        $clientNum= Client::count();
        $userNum = User::count();
        
        // $taskPend = Task::query()->where("status","pending")->count();
        // $taskInProg = Task::query()->where("status","pending")->count();
        // $taskComp = Task::query()->where("status","pending")->count();

        $data['propNum']=$propNum;
        $data['clientNum']=$clientNum;
        $data['userNum']=$userNum;

        Log::info("propNum=".(string)$propNum." clientNum=".(string)$clientNum." userNum=".(string)$userNum);

        return inertia("Dashboard",[
            'dashBoardData'=> $data,
        ]);
    }
}
