<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;

class ProjectResource extends JsonResource
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
            'description'=>$this->description,
            'dueDate'=>(new Carbon($this->due_date))->format('Y-m-d'),
            'status'=> $this->status,
            'imgPath'=>$this->img_path,
            // 'created_by'=>$this->created_by,
            'createdBy'=>new UserResource($this->createdBy),
            // 'updatedBy'=>$this->updated_by,
            'updatedBy'=>new UserResource($this->updatedBy),
            'createdAt'=>(new Carbon($this->createdAt))->format("Y-m-d"),
        ];
    }
}
