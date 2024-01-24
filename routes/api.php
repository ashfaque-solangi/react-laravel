<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

use App\Http\Controllers\UserAuthController;

Route::post('/register',[UserAuthController::class,'registerUser']);
Route::post('/login',[UserAuthController::class,'loginUser']);
Route::get('/logout',[UserAuthController::class,'logoutUser']);

// Route::get('/user', function (Request $request) {
//     dd("DONE");
// });


