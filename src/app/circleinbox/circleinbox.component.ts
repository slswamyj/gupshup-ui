import { Component } from '@angular/core';
import { CircleService } from '../service/circle.service';
import {Router} from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import {Circle} from '../model/Circle'; 
import {EditCircleComponent} from '../editcircle/editcircle.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import {DeleteCircleComponent} from '../deletecircle/deletecircle.component';

@Component({
  selector: 'circleinbox',
  templateUrl: './circleinbox.component.html',
  styleUrls: ['./circleinbox.component.css']
})
export class CircleInboxComponent {
myinbox:string;
members:Circle;
circle:Circle;
memberName:any;
circleName: string;
circleDescription: string;
selectedOption: string;
result: any;
keywords:string;
description:string;

constructor(
  private circleservice : CircleService,
  private router:Router,
  private route:ActivatedRoute,
  private dialog: MdDialog){

 
  } 

 ngOnInit() {	
 	this.route.params.switchMap((param:Params) => 
    		 this.circleservice.getCircleinbox(param['circle'])
    	).subscribe((Circleinbox) => {
    			this.myinbox = Circleinbox;
    		 
    	});
      this.circleservice.getcircleKeywords(this.myinbox).subscribe((keywords)=>this.keywords=keywords);
         this.circleservice.getcircleDescription(this.myinbox).subscribe((description)=>this.description=description);
         

 }

  
 Members() {
    
    this.circleservice.getMember(this.myinbox).subscribe((mem) => {
      this.members = mem;
     });
    
   	}
   

  openDialog() {
     
 
      this.dialog.open(EditCircleComponent, {
         data: {
               Keywords: this.keywords,
               Description:this.description,
               Circle:this.myinbox
               }
             });
    
      
    }
    deleteCircle() {
     
 
      this.dialog.open(DeleteCircleComponent, {
         data: {
               Keywords: this.keywords,
               Description:this.description,
               Circle:this.myinbox
               }
             });
    
      
    }
   
}