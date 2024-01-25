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
use App\Http\Controllers\FeedbackController;

Route::post('/register',[UserAuthController::class,'registerUser']);
Route::post('/login',[UserAuthController::class,'loginUser']);
Route::post('/logout',[UserAuthController::class,'logoutUser']);

Route::get('/all_feedbacks',[FeedbackController::class,'index']);
// Route::match(['get', 'post'], '/all_feedbacks',[FeedbackController::class,'index']);


// Route::get('/user', function (Request $request) {
//     dd("DONE");
// });


