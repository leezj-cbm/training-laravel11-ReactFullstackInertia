<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = ['name','UEN_number','contact_name','contact_email','contact_number','created_at','updated_at'];

    public function properties(){
        return $this->hasMany(Property::class);
    }


}
