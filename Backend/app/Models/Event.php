<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
     protected $fillable = [
        'title',
        'description',
        'starts_at',
        'image',
        'location',
        'capacity',
        'price',
        'status',
    ];



     public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
