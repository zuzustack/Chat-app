<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Message;

class MessageController extends Controller
{
    public function getMessage(Request $request){
        // Query get message
        $table = DB::table('messages')
                ->join('users','users.id','=','messages.sender_id')
                ->select('users.username', 'messages.*')
                ->where(function($query) {
                    global $request;
                    $query->where('messages.sender_id', $request->sender_id)
                          ->where('messages.receiver_id', $request->receiver_id);
                })
                ->orWhere(function($query) {
                    global $request;
                    $query->where('messages.sender_id', $request->receiver_id)
                          ->where('messages.receiver_id', $request->sender_id);
                })
                ->orderBy('id', 'asc')
                ->get();




        return response()->json([
            'data' => $table
        ]);
    }

    public function sendMessage(Request $request){
        Message::create([
            'text' => $request->text,
            'receiver_id' => $request->receiver_id,
            'sender_id' => $request->sender_id
        ]);

        return response()->json([
            'sukses' => true
        ]);
    }
}
