<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'image_path', 'address', 'coordinates', 'top_date', 'status'];


    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
