<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\HouseController;
use App\Http\Controllers\BoatController;
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

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('addcar',[CarController::class,'addCar']);
Route::post('addhouse',[HouseController::class,'addHouse']);
Route::post('addboat',[BoatController::class,'addBoat']);
Route::get('listcar',[CarController::class,'listCar']);
Route::get('listhouse',[HouseController::class,'listHouse']);
Route::get('listboat',[BoatController::class,'listBoat']);
Route::get('car/{id}',[CarController::class,'getCar']);
Route::get('house/{id}',[HouseController::class,'getHouse']);
Route::get('boat/{id}',[BoatController::class,'getBoat']);
Route::delete('deletecar/{id}',[CarController::class,'deleteCar']);
Route::delete('deletehouse/{id}',[HouseController::class,'deleteHouse']);
Route::delete('deleteboat/{id}',[BoatController::class,'deleteBoat']);
Route::put('updatecar/{id}',[CarController::class,'updateCar']);
Route::put('updatehouse/{id}',[HouseController::class,'updateHouse']);
Route::put('updateboat/{id}',[BoatController::class,'updateBoat']);
Route::delete('deleteuser/{id}',[UserController::class,'deleteUser']);
Route::put('updateuser/{id}',[UserController::class,'updateUser']);
Route::get('allusers',[UserController::class,'allUsers']);