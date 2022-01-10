<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\House;

class HouseController extends Controller
{
    //
    function addHouse(Request $req)
    {
        $house = new House;
        $house->user_id = $req->input('user_id');
        $house->city = $req->input('city');
        $house->size = $req->input('size');
        $house->price = $req->input('price');
        $house->file_path=$req->file('file')->store('bazar');
        $house->description = $req->input('description');
        $house->save();
        return $house;
    }
}
