import { MdDialogRef, MdDialog,MdDialogConfig,MD_DIALOG_DATA } from '@angular/material';
import { Component,Input,Inject } from '@angular/core';
import { Circle } from '../model/Circle';
import {Router} from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import { CircleService } from '../services/circle.service';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'editcircle',
  templateUrl: './deletecircle.component.html',
  styleUrls: ['./deletecircle.component.css'],
})


export class DeleteCircleComponent {
  editcircleform:FormGroup;
  cirName:string;
  key:string[];
  obj:Circle;
  circle:any;

  constructor(public dialogRef: MdDialogRef<DeleteCircleComponent>,
    private circleService:CircleService,
    private fb:FormBuilder,
    @Inject(MD_DIALOG_DATA) public data: any) {
    this.editForm();
  }     

  editForm()  { 
    this.editcircleform=this.fb.group({
      keywords:this.data.circle.Keywords,
      description:this.data.circle.Description,
      circleName:this.data.circle.circleName
    })
  }

  delCircle(){
    this.circle = this.deleteCircle();
    this.circleService.deleteCircle(this.circle.circleId).subscribe();
  }

  deleteCircle() {
    const formModel = this.editcircleform.value;
    const saveCircle= {
      circleName: formModel.Circle as string,
      circleDescription:formModel.description as string,
      keywords: formModel.keywords as string[]
    };
    return saveCircle;
  }

}
