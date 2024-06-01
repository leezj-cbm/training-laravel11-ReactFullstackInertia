<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = array('pending','in_progress','completed');
        return [
            //
            'name'=>fake()->name(),
            'client_id'=>random_int(1,10),
            'description'=>fake()->sentence(),
            'image_path'=>fake()->imageUrl(),
            'address'=>fake()->streetAddress(),
            'coordinates'=>fake()->numberBetween($int1 = 1 , $int2 = 10000000)." , ".fake()->numberBetween($int1 = 1 , $int2 = 10000000),
            'top_date'=>fake()->date(),
            'status'=>$status[random_int(0,2)],
            'created_at'=>time(),
            'updated_at'=>time(),

        ];
    }
}
