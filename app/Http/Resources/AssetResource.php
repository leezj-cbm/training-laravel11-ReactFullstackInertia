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
            'id'=>$this->id,
            'name'=>$this->name,
            'property_id'=>$this->property_id ,
            'type'=>$this->type,
            'make'=>$this->make,
            'model'=>$this->model,
            'location'=>$this->location,
            'status'=>$this->status,
            'sensorsCount'=>$this->sensors()->count(),
        ];
    }
}
