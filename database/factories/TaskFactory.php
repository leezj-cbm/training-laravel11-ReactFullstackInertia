<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'asset_id'=>random_int(1,10),
            'name'=> fake()->name(),
            'description'=>fake()->realText(),
            'due_date'=>fake()->dateTimeBetween('now','+1 year'),
            'status'=>fake()
                        ->randomElement(['pending','in_progress','completed']),
            'priority'=>fake()
                        ->randomElement(['low','medium','high']),
            'PIC'=>fake()->name(),
            'created_at'=>time(),
            'updated_at'=>time(),

        ];
    }
}
