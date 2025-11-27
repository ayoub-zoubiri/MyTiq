<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\Event;
use App\Http\Requests\StoreTicketRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TicketController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->role === 'admin') {
            $tickets = Ticket::with(['user', 'event'])->orderBy('created_at', 'desc')->get();
        } else {
            $tickets = Ticket::with('event')
                ->where('user_id', $request->user()->id)
                ->orderBy('created_at', 'desc')
                ->get();
        }

        return response()->json($tickets);
    }

    public function store(StoreTicketRequest $request)
    {
        $event = Event::findOrFail($request->event_id);

        $soldTickets = Ticket::where('event_id', $event->id)->count();

        if ($soldTickets >= $event->capacity) {
            return response()->json(['message' => 'Event is sold out'], 400);
        }

        $ticket = Ticket::create([
            'user_id' => $request->user()->id,
            'event_id' => $event->id,
            'code' => strtoupper(Str::random(10)),
            'amount' => $event->price,
        ]);

        $ticket->load('event');

        return response()->json($ticket, 201);
    }

    public function show(Ticket $ticket)
    {
        if (request()->user()->role !== 'admin' && $ticket->user_id !== request()->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $ticket->load(['event', 'user']);

        return response()->json($ticket);
    }

    public function eventTickets($eventId)
    {
        if (request()->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $tickets = Ticket::with('user')
            ->where('event_id', $eventId)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($tickets);
    }
}
