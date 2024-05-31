<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'image_path', 'address', 'coordinates', 'top_date', 'status'];

    public function clients(){
        return $this->belongsTo(Client::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function assets(){
        return $this->hasMany(Asset::class);
    }
}
