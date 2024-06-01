<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description','status', 'priority', 'status','PIC'];

    public function assets(){
        return $this->belongsTo(Asset::class);

    }


}
