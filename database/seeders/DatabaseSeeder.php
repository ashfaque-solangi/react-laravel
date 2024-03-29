<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Feedback::factory(10)->create();
        \App\Models\Comment::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     'password' => Hash::make(12345),
        // ]);

        // \App\Models\Feedback::factory()->create([
        //     'user_id' => '1',
        //     'name' => 'Ashfaque',
        //     'email' => 'admin@admin.com',
        //     'phone_number' => '03023675643',
        //     'description' => 'fake data',
        // ]);

        // \App\Models\Feedback::factory()->create([
        //     'user_id' => '1,
        //     'name' => 'Ashfaque',
        //     'email' => 'admin@admin.com',
        //     'phone_number' => '03023675643',
        //     'description' => 'fake data',
        // ]);
    }
}
