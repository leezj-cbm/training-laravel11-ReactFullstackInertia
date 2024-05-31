<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asset>
 */
class AssetFactory extends Factory
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
            'property_id'=>random_int(1,10),
            'type'=>fake()->name(),
            'make'=>fake()->name(),
            'model'=>fake()->name(),
            'location'=>fake()->sentence(2),
            'status'=>$status[random_int(0,2)],
            'created_at'=>time(),
            'updated_at'=>time(),
        ];
    }
}
