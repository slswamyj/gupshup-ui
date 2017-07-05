import { MdDialogRef } from '@angular/material';
import { Component,Input } from '@angular/core';
import { Circle } from '../model/Circle';

import { CircleService } from '../service/circle.service';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'createcircle',
  templateUrl: './createcircle.component.html',
  styleUrls: ['./createcircle.component.css']
})
export class CreateCircle 
{
   @Input() circle: Circle;
 
  circleform:FormGroup;

  constructor(public dialogRef: MdDialogRef<CreateCircle>,
    private circleService: CircleService,private fb:FormBuilder) {
    this.createForm();

  }
  
createForm()
{
 this.circleform=this.fb.group({
   circleName:"",
   circleDescription:"",
   keywords:""

 })
}
  createCircle(){
    this.circle = this.SaveCircle();
    this.circleService.saveCircleIn(this.circle).subscribe();
   
  }

  SaveCircle(): Circle {
    const formModel = this.circleform.value;
     const saveCircle: Circle = {
      
      circleName: formModel.circleName as string,
      circleDescription:formModel.circleDescription as string,
      keywords: formModel.keywords as string[]
    };
    return saveCircle;
  }

}