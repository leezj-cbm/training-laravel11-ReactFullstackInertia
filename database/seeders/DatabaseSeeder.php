<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use App\Models\Task;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'zhenjianlee',
            'email' => 'zhenjianlee@example.com',
            'password'=>bcrypt('12345678'),
            'email_verified_at'=>time(),
        ]);

        Project::factory()
                    ->count(30)
                    ->hasTasks(30)
                    ->create();

        // do i still need this? hasTasks above seems to already seed the DB
        // Task::factory()
        //             ->count(30)
        //             ->hasUsers(30)
        //             ->create();
    }
}
