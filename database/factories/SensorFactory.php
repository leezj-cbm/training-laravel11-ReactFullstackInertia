<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sensor>
 */
class SensorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status =array("active","inactive","decomm");
        return [
            //
            'asset_id'=> random_int(1,10),
            'name'=>fake()->name(),
            'type'=>fake()->realText(),
            'description'=>fake()->sentence(10),
            'status'=>$status[random_int(0,2)],
            'deployed_at'=>fake()->date(),
            'created_at'=> time(),
            'updated_at'=>time(),
        ];
    }
}
