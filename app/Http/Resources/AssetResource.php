<?php

namespace App\Http\Resources;

use App\Models\Property;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AssetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name'=>$this->name,
            'property_id'=>Property::find($this->id)?Property::find($this->id)->name:"Undefined" ,
            'type'=>$this->type,
            'make'=>$this->make,
            'model'=>$this->model,
            'location'=>$this->location,
            'status'=>$this->status,
        ];
    }
}
