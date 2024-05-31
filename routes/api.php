<?php

use App\Http\Controllers\API\ProjectAPIController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);

Route::middleware('auth:api')->group(function(){
    Route::get('/userInfo',[UserController::class,'userInfo']);

    /*
    Route::resource('/projects/v1',ProjectAPIController::class);
    */
});

