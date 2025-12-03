<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsletterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TicketController;

Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{event}', [EventController::class, 'show']);

Route::middleware(['auth:sanctum','role:admin'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/events', [EventController::class, 'store']);
    Route::put('/events/{event}', [EventController::class, 'update']);
    Route::delete('/events/{event}', [EventController::class, 'destroy']);

    Route::get('/tickets', [TicketController::class, 'index']);
    Route::post('/tickets', [TicketController::class, 'store']);
    Route::get('/tickets/{ticket}', [TicketController::class, 'show']);
    Route::get('/events/{eventId}/tickets', [TicketController::class, 'eventTickets']);
});






Route::post('/register', [AuthController::class, 'register']);
 Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
   
Route::post('/logout', [AuthController::class, 'logout']);
    
});



Route::post('/newsletter', [NewsletterController::class, 'store']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/newsletters', [NewsletterController::class, 'index']);
    Route::get('/newsletters/{id}', [NewsletterController::class, 'show']);
    Route::delete('/newsletters/{id}', [NewsletterController::class, 'destroy']);
});
 Route::middleware(['auth:sanctum','role:admin'])->group(function () {
    Route::apiResource('users', \App\Http\Controllers\UserController::class);
 });
// Route::get('/users', [\App\Http\Controllers\UserController::class, 'index']);
// Route::post('/users', [\App\Http\Controllers\UserController::class, 'store']);

// Route::put('/users/{id}', [\App\Http\Controllers\UserController::class, 'update']);
// Route::delete('/users/{id}', [\App\Http\Controllers\UserController::class, 'destroy']);
