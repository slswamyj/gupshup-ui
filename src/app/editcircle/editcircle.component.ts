import { MdDialogRef, MdDialog,MdDialogConfig,MD_DIALOG_DATA } from '@angular/material';
import { Component,Input,Inject } from '@angular/core';
import { Circle } from '../model/Circle';
import {Router} from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import { CircleService } from '../service/circle.service';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'editcircle',
  templateUrl: './editcircle.component.html',
  styleUrls: ['./editcircle.component.css'],
})


export class EditCircleComponent {


 
  editcircleform:FormGroup;
cirName:string;
key:string[];
obj:Circle;
circle:Circle;

  constructor(public dialogRef: MdDialogRef<EditCircleComponent>,
    private circleService:CircleService,
    private fb:FormBuilder,
   
   @Inject(MD_DIALOG_DATA) public data: any) {

    console.log('data', this.data.Circle);
    this.editForm();
  }     

 
  
 

editForm()
{ 
  this.editcircleform=this.fb.group({
   keywords:this.data.Keywords,
   description:this.data.Description,
   Circle:this.data.Circle
   
 })

}
  editCircle(){
    this.circle = this.SaveCircle();
    this.circleService.saveCircleIn(this.circle).subscribe();
  
  }

  SaveCircle(): Circle {
    const formModel = this.editcircleform.value;

     const saveCircle: Circle = {
      
      circleName: formModel.Circle as string,
      circleDescription:formModel.description as string,
      keywords: formModel.keywords as string[]
    };
    
    console.log("circle details :"+saveCircle.keywords+"cname :"+saveCircle.circleName+" des: "+saveCircle.circleDescription);
    return saveCircle;
  }

}
