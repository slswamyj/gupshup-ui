import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { CreateCircle } from '../createcircle/createcircle.component';

import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftPanelComponent {
	result: any;
  selectedOption: string;
  model: any = {};

  constructor( private dialog: MdDialog,
    private userProfileService: UserProfileService ) {
    	/*this.circleservice.getCircles().subscribe((circles:string[]) => {
        this.circle = circles;*/ 
      }

      openDialog() {
        let dialogRef = this.dialog.open(CreateCircle);
        dialogRef.afterClosed().subscribe(result => {
          this.selectedOption = result;
        });
      }

      ngOnInit() {
        let username = localStorage.getItem("username");
        this.userProfileService.getUser(username)
        .subscribe(
          data => {
            this.model = data;
          },
          error =>{
            console.log(error);
          }
          );
      }
    }