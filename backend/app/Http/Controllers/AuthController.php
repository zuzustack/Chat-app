<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller{
    // Login Controller
    public function login(Request $request){
        Auth::attempt([
            'username' => $request->get('username'),
            'password' => $request->get('password'),
        ]);

        if (Auth::check()) {
            $token = Auth::user()->createToken('manage-chat');
            return response()->json([
                'status' => 200,
                'user' => Auth::user(),
                'token' => $token->plainTextToken, 
            ]);
        }else {
            return response()->json([
                'message' => "Password or Username Wrong!",
                'status' => 400,
            ]);
        }

    }
}
