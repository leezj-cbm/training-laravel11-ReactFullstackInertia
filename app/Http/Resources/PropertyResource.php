<?php

namespace App\Http\Resources;

use App\Models\Asset;
use App\Models\Client;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap =false;
    
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'clientId'=>Client::find($this->id)?Client::find($this->id)->name : "Undefined" ,
            'name'=>$this->name,
            'description'=>$this->description,
            'imgPath'=>$this->image_path ? Storage::url($this->image_path):'',
            'address'=>$this->address,
            'coordinates'=> $this->coordinates,
            'topDate'=>(new Carbon($this->top_date))->format('Y-m-d'),
            'assetsCount'=>Asset::query()->where('property_id',$this->id)->count(),
            'status'=> $this->status,
            'createdAt'=>(new Carbon($this->createdAt))->format("Y-m-d"),
            'updatedAt'=>(new Carbon($this->createdAt))->format("Y-m-d"),
        ];
    }
}
