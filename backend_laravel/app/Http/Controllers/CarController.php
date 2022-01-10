<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;


class CarController extends Controller
{
    //

    function addCar(Request $req)
    {
        $car = new Car;
        $car->user_id = $req->input('user_id');
        $car->name = $req->input('name');
        $car->model = $req->input('model');
        $car->description = $req->input('description');
        $car->price = $req->input('price');
        $car->file_path=$req->file('file')->store('bazar');
        $car->save();
        return $car;
    }
}
