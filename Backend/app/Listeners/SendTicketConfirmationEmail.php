<?php

namespace App\Listeners;

use App\Events\TicketPurchased;
use App\Mail\TicketPurchaseConfirmation;
use Illuminate\Support\Facades\Mail;

class SendTicketConfirmationEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(TicketPurchased $event): void
    {
        $ticket = $event->ticket;

        // Send confirmation email with PDF attachment
        Mail::to($ticket->user->email)->send(new TicketPurchaseConfirmation($ticket));
    }
}
