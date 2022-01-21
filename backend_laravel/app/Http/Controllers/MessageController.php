<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    //

    function addMessage(Request $req)
    {
        function checkInput($p) {
            if(str_contains($p, '<') == true || str_contains($p, '*') == true || str_contains($p, '\'') == true || str_contains($p, '"') == true) {
             return false;
            } else {
             return true;
            }
        }
        if(checkInput($req->input('text')) == false){
            return ["error"=>"wrong input"];
        } else {
        $mess = new Message;
        $mess->user_name = $req->input('user_name');
        $mess->text = $req->input('text');
        $mess->save();
        return $mess;
        }
    }
    function listMessages()
    {
        return Message::all();
    }
}
