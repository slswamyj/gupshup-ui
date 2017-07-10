import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { CreateCircle } from '../createcircle/createcircle.component';

@Component({
  selector: 'leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftPanelComponent {
	result: any;
  	selectedOption: string;

  	constructor( private dialog: MdDialog ) {
    	/*this.circleservice.getCircles().subscribe((circles:string[]) => {
      	this.circle = circles;*/ 
    }
    
    openDialog() {
    	let dialogRef = this.dialog.open(CreateCircle);
    	dialogRef.afterClosed().subscribe(result => {
    		this.selectedOption = result;
    	});
  	}
}