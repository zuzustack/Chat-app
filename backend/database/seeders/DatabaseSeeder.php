<?php

namespace Database\Seeders;

use App\Models\Friend;
use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'username' => "ridwan",
            'password' => '$2y$10$ORLEYzfLIiMtSuK9r2LC/edl29Vs/BrCImemveo/xmka0u2kBut/O'
        ]);

        User::create([
            'username' => "zaki",
            'password' => '$2y$10$ORLEYzfLIiMtSuK9r2LC/edl29Vs/BrCImemveo/xmka0u2kBut/O'
        ]);

        User::create([
            'username' => "zull",
            'password' => '$2y$10$ORLEYzfLIiMtSuK9r2LC/edl29Vs/BrCImemveo/xmka0u2kBut/O'
        ]);

        Friend::create([
            'user_id' => 1,
            'friend_id' => 2,
        ]);

        Friend::create([
            'user_id' => 2,
            'friend_id' => 1,
        ]);

        Friend::create([
            'user_id' => 1,
            'friend_id' => 3,
        ]);

        Friend::create([
            'user_id' => 3,
            'friend_id' => 1,
        ]);


        Message::create([
            'text' => 'Hello',
            'receiver_id' => 1,
            'sender_id' => 2,
        ]);

        Message::create([
            'text' => 'Hi!',
            'receiver_id' => 2,
            'sender_id' => 1,
        ]);

        Message::create([
            'text' => 'Whats wrong?',
            'receiver_id' => 2,
            'sender_id' => 1,
        ]);
    }
}
