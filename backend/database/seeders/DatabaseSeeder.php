<?php

namespace Database\Seeders;

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
            'username' => "admin",
            'password' => '$2y$10$ORLEYzfLIiMtSuK9r2LC/edl29Vs/BrCImemveo/xmka0u2kBut/O'
        ]);
    }
}
