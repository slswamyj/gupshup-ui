import { MdDialogRef, MdDialog,MdDialogConfig,MD_DIALOG_DATA } from '@angular/material';
import { Component,Input,Inject } from '@angular/core';
import { Circle } from '../model/Circle';
import { Router} from '@angular/router';
import { ActivatedRoute,Params} from '@angular/router';
import { CircleService } from '../services/circle.service';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'editcircle',
  templateUrl: './editcircle.component.html',
  styleUrls: ['./editcircle.component.css'],
})


export class EditCircleComponent {

  editcircleform:FormGroup;
  circle:Circle;

  constructor(public dialogRef: MdDialogRef<EditCircleComponent>,
    private circleService:CircleService,
    private fb:FormBuilder,
    @Inject(MD_DIALOG_DATA) public data: any) {
    this.circle = data.circle;
    this.editForm();
  }     

  editForm() { 
    this.editcircleform=this.fb.group({
      keywords:this.data.circle.keywords.join(','),
      description:this.data.circle.circleDescription,
      circleName:this.data.circle.circleName
    })
  }
  
  editCircle(){
    this.dialogRef.close();
    this.saveCircle();
    this.circleService.updateCircle(this.circle).subscribe((data)=> console.log(data));
  }

  saveCircle() {
    const formModel = this.editcircleform.value;
    this.circle.circleDescription = formModel.description as string,
    this.circle.keywords =  formModel.keywords.split(',')
  }

}
