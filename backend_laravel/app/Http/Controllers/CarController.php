<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;


class CarController extends Controller
{
    //

    function addCar(Request $req)
    {
        function checkInput($p) {
            if(str_contains($p, '<') == true || str_contains($p, '*') == true || str_contains($p, '\'') == true || str_contains($p, '"') == true) {
             return false;
            } else {
             return true;
            }
        }
        if(checkInput($req->input('user_id')) == false || checkInput($req->input('name')) == false ||checkInput($req->input('model')) == false 
            ||checkInput($req->input('description')) == false ||checkInput($req->input('price')) == false  ||checkInput($req->input('kontakt')) == false)
            {
            return ["error"=>"wrong input"];
        } else {
        $car = new Car;
        $car->user_id = $req->input('user_id');
        $car->name = $req->input('name');
        $car->model = $req->input('model');
        $car->description = $req->input('description');
        $car->price = $req->input('price');
        $car->kontakt = $req->input('kontakt');
        $car->file_path=$req->file('file')->store('bazar');
        $car->save();
        return $car;
        }
    }

    function listCar()
    {
        return Car::all();
    }

    function getCar($id)
    {
        return Car::find($id);
    }

    function deleteCar($id)
    {
        $result = Car::where('id',$id)->delete();
            if($result)
            {
                return ["result"=>"delete"];
            }
            else {
                return ["result"=> "delete fail"];
            }
    }

    function updateCar($id, Request $req)
    {
        $car = Car::find($id);
        $car->name = $req->input('name');
        $car->model = $req->input('model');
        $car->description = $req->input('description');
        $car->price = $req->input('price');
        $car->kontakt = $req->input('kontakt');
        if($req->file('file'))
        {
            $car->file_path=$req->file('file')->store('bazar');
        }
        $car->save();
        return $car;
    }

}
