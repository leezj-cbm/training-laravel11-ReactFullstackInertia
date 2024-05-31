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
        $status = ['pending','in_progress','completed'];
        return [
            //
            'name'=>fake()->name(),
            'description'=>fake()->sentence(),
            'image_path'=>fake()->imageUrl(),
            'address'=>fake()->streetAddress(),
            'coordinates'=>fake()->numberBetween($int1 = 1 , $int2 = 10000000),
            'top_date'=>time(),
            'status'=>array_rand($status),

        ];
    }
}
