<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectAPIController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//zura modified - to use redirect
/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
*/

//modification below

Route::redirect('/','/dashboard'); // redirect '/' to '/dashboard'

//create middleware group - so authenticated user can only enter the restricted links

//normal function version
/*
Route::middleware(['auth','verified'])->group(function(){
    //this is the protected link
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
*/
// arrow function version
Route::middleware(['auth','verified'])->group(function(){
    //this is the protected link
    //Route::get('/dashboard', fn ()=>Inertia::render('Dashboard'))->name('dashboard');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    //add in project controller , task controller and user controller

    Route::resource('project',ProjectController::class);
    Route::resource('task',TaskController::class);
    Route::resource('user',UserController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Implementing HTTP API here
Route::resource('/api/project/v1',ProjectAPIController::class);
Route::get('/csrf-token', function(){
    return response()->json(['csrf-token'=> csrf_token()]);
});

require __DIR__.'/auth.php';
