<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            'uenNumber'=>$this->UEN_number,
            'contactName'=>$this->contact_name,
            'contactEmail'=>$this->contact_email,
            'contactNumber'=>$this->contact_number,
            'updatedAt'=>(new Carbon($this->updated_at))->format('Y-m-d'),
        ];
    }
}
