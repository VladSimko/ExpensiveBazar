<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\House;

class HouseController extends Controller
{
    //
    function addHouse(Request $req)
    {
        function checkInput($p) {
            if(str_contains($p, '<') == true || str_contains($p, '*') == true || str_contains($p, '\'') == true || str_contains($p, '"') == true) {
             return false;
            } else {
             return true;
            }
        }
        if(checkInput($req->input('user_id')) == false || checkInput($req->input('city')) == false ||checkInput($req->input('size')) == false 
            ||checkInput($req->input('description')) == false ||checkInput($req->input('price')) == false  ||checkInput($req->input('kontakt')) == false)
            {
            return ["error"=>"wrong input"];
        } else {
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
    function updateHouse($id, Request $req)
    {
        $house = House::find($id);
        $house->city = $req->input('city');
        $house->size = $req->input('size');
        $house->description = $req->input('description');
        $house->price = $req->input('price');
        $house->kontakt = $req->input('kontakt');
        if($req->file('file'))
        {
            $house->file_path=$req->file('file')->store('bazar');
        }
        $house->save();
        return $house;
    }
}
