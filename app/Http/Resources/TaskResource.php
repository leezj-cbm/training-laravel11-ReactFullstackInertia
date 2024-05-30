<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,// x
            'name'=>$this->name,// x
            'description'=>$this->description,//
            'imgPath'=>$this->image_path,//
            'status'=>$this->status,// x
            'priority'=>$this->priority,//
            'createdAt'=>(new Carbon($this->created_at))->format('Y-m-d'),//
            'dueDate'=>(new Carbon($this->created_at))->format('Y-m-d'),//
            'assignedUserId'=>$this->assigned_user_id? new UserResource($this->assignedUser):null, // 
            'createdBy'=>new UserResource($this->createdBy), 
            'updatedBy'=>new UserResource($this->updatedBy),  
            'projectId'=>$this->project_id, //
        ];
    }
}
