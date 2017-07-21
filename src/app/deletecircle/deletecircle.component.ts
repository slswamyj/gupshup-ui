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
  deleteCircleForm:FormGroup;
  circle:any;

  constructor(public dialogRef: MdDialogRef<DeleteCircleComponent>,
    private circleService:CircleService,
    private fb:FormBuilder,
    private router:Router,
    @Inject(MD_DIALOG_DATA) public data: any) {
    this.deleteForm();
    this.circle = this.data.circle;
  }     

  deleteForm()  { 
    this.deleteCircleForm=this.fb.group({
      keywords:this.data.circle.keywords.join(','),
      description:this.data.circle.circleDescription,
      circleName:this.data.circle.circleName
    })
  }

  deleteCircle(){
    this.dialogRef.close();
    this.circleService.deleteCircle(this.circle.circleId).subscribe((data) => {
      this.circleService.removeCircle(this.circle);
      this.router.navigate(['landingpage'])});
  }

}
