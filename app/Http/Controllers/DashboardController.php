<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Models\Client;
use App\Models\Project;
use App\Models\Property;
use App\Models\Reading;
use App\Models\Sensor;
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
        $assetNum = Asset::count();
        $taskNum=Task::count();
        $sensorNum = Sensor::count();
        $readingNum = Reading::count();
        $genData['propNum']=$propNum;
        $genData['clientNum']=$clientNum;
        $genData['userNum']=$userNum;
        $genData['assetNum']=$assetNum;
        $genData['taskNum']=$taskNum;
        $genData['sensorNum']=$sensorNum;
        $genData['readingNum']=$readingNum;

        $taskPend = Task::query()->where("status","pending")->count();
        $taskInProg = Task::query()->where("status","in_progress")->count();
        $taskComp = Task::query()->where("status","completed")->count();

        $taskData['taskPend']=$taskPend;
        $taskData['taskInProg']=$taskInProg;
        $taskData['taskComp']=$taskComp;



        return inertia("Dashboard",[
            'dashBoardData'=> $genData,
            'taskData'=>$taskData,
        ]);
    }
}
