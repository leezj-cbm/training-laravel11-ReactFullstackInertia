<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;

    protected $fillable = ['name','type','make','model','location','status'];

    public function properties(){
        return $this->belongsTo(Property::class);
    }

    public function sensors(){
        return $this->hasMany(Sensor::class);
    }
}
