<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user-chat', function() {
        return response()->json([
            'status' => 'oke'
        ]);
    });

    Route::get('/getFriends', [UserController::class, 'getFriends']);
});


Route::get('/message', [MessageController::class, 'getMessage']);

Route::post('/sendMessage', [MessageController::class, 'sendMessage']);


Route::post('/login', [AuthController::class, 'login']);
Route::get('/login', [AuthController::class, 'login']);
