<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Event;
use App\Models\Newsletter;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $users = User::factory(10)->create();


        $events = Event::factory(5)->create();

        Newsletter::factory(20)->create([
            'user_id' => function () use ($users) {
                return $users->random()->id;
            }
        ]);
        

      
        
        Ticket::factory(30)->create([
            'user_id' => function () use ($users) {
                return $users->random()->id;
            },
            'event_id' => function () use ($events) {
                return $events->random()->id;
            },
        ]);



    }
}
