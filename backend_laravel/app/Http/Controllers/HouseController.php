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
        $house->kontakt = $req->input('kontakt');
        $house->save();
        return $house;
    }

    function listHouse()
    {
        return House::all();
    }

    function getHouse($id)
    {
        return House::find($id);
    }
    function deleteHouse($id)
    {
        $result = House::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"delete"];
        }
        else {
            return ["result"=> "delete fail"];
        }
    }
}
