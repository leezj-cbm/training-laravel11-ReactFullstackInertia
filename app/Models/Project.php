<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    // Important note 1: this need to match the migration and database side.
    // Important note 2: the ProjectResource associative array VALUE side need to match this in order to get correct data
    protected $fillable = ['img_path','name','description', 'status','due_date','created_by','updated_by'];


    public function tasks(){
        return $this->hasMany(Task::class);
    }

    public function createdBy(){
        return $this->belongsTo(User::class,'created_by');
    }

    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by');
    }
}
