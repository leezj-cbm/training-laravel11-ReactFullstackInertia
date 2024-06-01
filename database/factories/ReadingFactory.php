<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reading>
 */
class ReadingFactory extends Factory
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
            'sensor_id'=>random_int(1,10),
            'value'=>ReadingFactory::random_double(1,1000),
            'measured_unit'=>fake()->word(),
            'measured_time'=>Carbon::now(),
            'description'=>fake()->realText(60),
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now(),
        ];
    }

    private function random_double($min, $max){
        return $min+ ($max-$min)*(mt_rand()/mt_getrandmax());
    }
}
