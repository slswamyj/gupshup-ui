import { MdDialogRef } from '@angular/material';
import { Component,Input } from '@angular/core';
import { Circle } from '../model/Circle';

import { CircleService } from '../services/circle.service';
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
      keywords: this.fb.array([])
      
     })
  }
  createCircle(){
    this.circle = this.SaveCircle();
    this.circleService.saveCircleIn(this.circle)
        .subscribe(data => {
            console.log(data.json());
         },
         error => {
           console.log(error);
         }
    );

  }

  SaveCircle(): Circle {
    let username = localStorage.getItem("username");
    const formModel = this.circleform.value;
    const saveCircle: Circle = {

      circleName: formModel.circleName as string,
      circleDescription:formModel.circleDescription as string,
      keywords: formModel.keywords as string[],
      circleCreatedBy: username,
      circleCreatedDate: null,
      circleMembers: []

    };
    console.log(formModel.keywords);
    return saveCircle;
  }

  create(circleName: string, description: string, keywords: string[]) {

  }

}