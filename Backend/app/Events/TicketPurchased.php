<?php

namespace App\Events;

use App\Models\Ticket;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TicketPurchased
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $ticket;

    /**
     * Create a new event instance.
     */
    public function __construct(Ticket $ticket)
    {
        $this->ticket = $ticket;
    }
}
