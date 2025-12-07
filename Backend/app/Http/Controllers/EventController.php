<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::withCount('tickets')->orderBy('starts_at', 'desc')->get();
        
        return response()->json($events);
    }

    //     public function store(StoreEventRequest $request)
    // {
    //     $event = Event::create($request->validated());

    //      if ($request->hasFile('image')) {
    //     $uploaded = Cloudinary::upload($request->file('image')->getRealPath());
    //     $data['image'] = $uploaded->getSecurePath();
    // }
    //     return response()->json($event, 201);
    // }

// public function store(StoreEventRequest $request)
// {
//     $data = $request->validated();

   
//     if ($request->hasFile('image')) {
//         $uploaded = Cloudinary::upload($request->file('image')->getRealPath());
//         $data['image'] = $uploaded->getSecurePath(); 
//     }

//     $event = Event::create($data);

//     return response()->json($event, 201);
// }


public function store(StoreEventRequest $request)
{
    $data = $request->validated();

    // Upload Image if exists
    if ($request->hasFile('image')) {

        $uploaded = Cloudinary::upload(
            $request->file('image')->getRealPath(),
            ['folder' => 'events']
        );

        $data['image'] = $uploaded->getSecurePath(); // URL de Cloudinary
    }

    // Créer l'événement APRES avoir ajouté l'image
    $event = Event::create($data);

    return response()->json($event, 201);
}



    public function show(Event $event)
    {
        $event->load('tickets');
        
        return response()->json($event);
    }





    public function update(UpdateEventRequest $request, Event $event)
    {

        $event->update($request->validated());

        return response()->json($event);
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json(['message' => 'Event deleted successfully']);
    }
}
