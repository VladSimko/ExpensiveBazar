<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Boat;


class BoatController extends Controller
{
    //
    function addBoat(Request $req)
    {
        $boat = new Boat;
        $boat->user_id = $req->input('user_id');
        $boat->name = $req->input('name');
        $boat->size = $req->input('size');
        $boat->price = $req->input('price');
        $boat->file_path=$req->file('file')->store('bazar');
        $boat->description = $req->input('description');
        $boat->kontakt = $req->input('kontakt');
        $boat->save();
        return $boat;
    }
    function listBoat()
    {
        return Boat::all();
    }
    function getBoat($id)
    {
        return Boat::find($id);
    }
    function deleteBoat($id)
    {
        $result = Boat::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"delete"];
        }
        else {
            return ["result"=> "delete fail"];
        }
    }
    function updateBoat($id, Request $req)
    {
        $boat = Boat::find($id);
        $boat->name = $req->input('name');
        $boat->size = $req->input('size');
        $boat->description = $req->input('description');
        $boat->price = $req->input('price');
        $boat->kontakt = $req->input('kontakt');
        if($req->file('file'))
        {
            $boat->file_path=$req->file('file')->store('bazar');
        }
        $boat->save();
        return $boat;
    }
}
