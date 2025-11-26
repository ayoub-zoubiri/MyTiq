<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
          'user_id' => User::factory(),
            'event_id' => Event::factory(),
            'code' => strtoupper($this->faker->bothify('TCKT-####??')),
            'amount' => $this->faker->randomFloat(2, 10, 200),
            'pdf_path' => null,
        ];
    }
}
