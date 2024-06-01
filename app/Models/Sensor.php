<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    use HasFactory;

    protected $fillable = ['name','type','description','status','deployed_at'];

    public function assets(){
        return $this->belongsTo(Asset::class);
    }

    public function sensors(){
        return $this->hasMany(Reading::class);
    }
}
