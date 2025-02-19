<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            DB::table('products')->insert([
                'name' => $faker->words(3, true),
                'description' => $faker->sentence(),
                'price' => $faker->randomFloat(2, 10, 1000),
                'image' => $faker->imageUrl(400, 400, 'products', true),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
