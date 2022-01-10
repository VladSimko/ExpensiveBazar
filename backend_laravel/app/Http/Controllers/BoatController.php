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
        $boat->save();
        return $boat;
    }
    function listBoat()
    {
        return Boat::all();
    }
}
