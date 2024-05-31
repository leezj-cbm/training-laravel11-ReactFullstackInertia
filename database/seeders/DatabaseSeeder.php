<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\User;
use App\Models\Property;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {   
        //specific user for testing
        // User::factory()->create([
        //     'name' => 'zhenjianlee',
        //     'email' => 'zhenjianlee@test.com',
        //     'password'=>bcrypt('zhen123!'),
        //     'email_verified_at'=>time(),
        // ]);

        // Client::factory()->count(10)->hasProperties(3)->create();
    
        // $properties = Property::factory()->count(10)->create();

        // User::factory()->count(10)->create()->each(
        //     function($user) use ($properties){
        //         $user->properties()->attach(
        //             $properties->random(rand(1,3))->pluck('id')->toArray()
        //         );
        //     }
        // );

        Client::factory()->count(10)->create();
        
        User::factory()->count(10)->create();

        Property::factory()->count(10)->create();


    }
}
