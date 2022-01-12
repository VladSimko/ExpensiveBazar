<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    //

    function register(Request $req)
    {
        $user = new User;
        $user->name= $req->input('name');
        $user->email= $req->input('email');
        $user->password= Hash::make($req->input('password'));
        $user->save();
        return $user;
        
    }
    function login(Request $req)
    {
        $user = User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password, $user->password))
        {
            return ["error"=>"wrong email or password"];
            
        }
        if($user && Hash::check($req->password, $user->password)){
            return $user;
        }
        
    } 

    function deleteUser($id)
    {
        $result = User::where('id',$id)->delete();
            if($result)
            {
                return ["result"=>"delete"];
            }
            else {
                return ["result"=> "delete fail"];
            }
    }

    function updateUser($id, Request $req)
    {
        $user = User::find($id);
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password= Hash::make($req->input('password'));
        $user->save();
        return $user;
    }



}
