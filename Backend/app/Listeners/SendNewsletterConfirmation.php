<?php

namespace App\Listeners;

use App\Events\NewsletterSubscribed;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewsletterConfirmation;
class SendNewsletterConfirmation


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
     public function handle(NewsletterSubscribed $event)
    {
        Mail::to($event->newsletter->email)->send(
            new NewsletterConfirmation($event->newsletter)
        );
    }
}
