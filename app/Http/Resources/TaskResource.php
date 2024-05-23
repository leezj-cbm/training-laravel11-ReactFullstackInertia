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
            'created_at'=>(new Carbon($this->created_at))->format('Y-m-d'),//
            'due_date'=>(new Carbon($this->created_at))->format('Y-m-d'),//
            'assigned_user_id'=>$this->assinged_user_id, //
            'created_by'=>new ProjectResource($this->createdBy), //
            'updated_by'=>new ProjectResource($this->updatedBy), //
            'project_id'=>$this->project_id, //
        ];
    }
}
