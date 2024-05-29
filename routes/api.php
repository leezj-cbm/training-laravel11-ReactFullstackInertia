<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::post('/userInfo',[UserController::class,'userInfo'])->middleware('auth:api');

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');

Route::middleware('auth:api')->group(function(){
    Route::get('userInfo',[UserController::class,'userInfo']);
});

