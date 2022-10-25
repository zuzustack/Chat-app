<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller{
    // Get Auth Friend
    public function getFriends(){
        $friends = Friend::where('user_id',Auth::user()->id)->with('friend')->get();
        return response()->json([
            'list' => $friends
        ]);
    }
}
