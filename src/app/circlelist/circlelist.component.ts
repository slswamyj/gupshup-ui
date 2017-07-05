import { Component, OnInit } from '@angular/core';
import { CircleService } from '../service/circle.service';
import { CreateCircle } from '../createcircle/createcircle.component';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'circlelist',
  templateUrl: './circlelist.component.html',
  styleUrls: ['./circlelist.component.css']
})
export class CircleListComponent {
  title="Gupshup";
  circle:string[];
  result: any;
  selectedOption: string;

  constructor(
    private router: Router,
    private circleservice: CircleService,
    public dialog: MdDialog) {
    this.circleservice.getCircles().subscribe((circles:string[]) => {
      this.circle = circles; 
    })}

    selectCircle(circle){
      this.circleservice.selectCircle(circle);
      this.router.navigate(['circleinbox',circle]);
    }

    

    openDialog() {
      let dialogRef = this.dialog.open(CreateCircle);
      dialogRef.afterClosed().subscribe(result => {
        this.selectedOption = result;
      });
    }
  }
