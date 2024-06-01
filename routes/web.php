<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/','/dashboard'); // redirect '/' to '/dashboard'

// arrow function version
Route::middleware(['auth','verified'])->group(function(){
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('property',PropertyController::class);
   // Route::resource('task',TaskController::class);
    Route::resource('user',UserController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Implementing HTTP API here

Route::get('/csrf-token', function(){
    return response()->json(['csrf-token'=> csrf_token()]);
});

require __DIR__.'/auth.php';
