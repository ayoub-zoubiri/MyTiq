<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use App\Http\Requests\StoreNewsletterRequest;
use App\Http\Requests\UpdateNewsletterRequest;
use Illuminate\Http\Request;
use App\Events\NewsletterSubscribed;
class NewsletterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Newsletter::with('user')->get(), 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
      public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:newsletters,email',
            'user_id' => 'nullable|exists:users,id'
        ]);

        $newsletter = Newsletter::create([
            'email' => $request->email,
            'user_id' => $request->user_id
        ]);
event(new NewsletterSubscribed($newsletter));


        return response()->json([
            'message' => 'Email added to newsletter',
            'newsletter' => $newsletter
        ], 201);
    }











    public function store(StoreNewsletterRequest $request)
{
    // Données validées
    $data = $request->validated();

    // Création de l'abonnement
    $newsletter = Newsletter::create($data);

    // Déclenchement de l’event
    event(new NewsletterSubscribed($newsletter));

    return response()->json([
        'message' => 'Email added to newsletter',
        'newsletter' => $newsletter
    ], 201);
}
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $newsletter = Newsletter::with('user')->find($id);

        if (! $newsletter) {
            return response()->json(['message' => 'Newsletter not found'], 404);
        }

        return response()->json($newsletter, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Newsletter $newsletter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsletterRequest $request, Newsletter $newsletter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $newsletter = Newsletter::find($id);

        if (! $newsletter) {
            return response()->json(['message' => 'Newsletter not found'], 404);
        }

        $newsletter->delete();

        return response()->json(['message' => 'Newsletter entry deleted'], 200);
    }
}
