<?php

namespace App\Listeners;

use App\Events\TicketPurchased;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;

class GenerateTicketPdf
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

        // Generate PDF
        $pdf = Pdf::loadView('pdfs.ticket-pdf', ['ticket' => $ticket]);
        
        // Create tickets directory if it doesn't exist
        if (!Storage::exists('tickets')) {
            Storage::makeDirectory('tickets');
        }
        
        // Save PDF to storage
        $pdfPath = 'tickets/ticket-' . $ticket->code . '.pdf';
        Storage::put($pdfPath, $pdf->output());
        
        // Update ticket with PDF path
        $ticket->update(['pdf_path' => $pdfPath]);
    }
}
