import { Component, OnInit } from '@angular/core';
import { CircleService } from '../services/circle.service';
import { CreateCircle } from '../createcircle/createcircle.component';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'circlelist',
  templateUrl: './circlelist.component.html',
  styleUrls: ['./circlelist.component.css']
})

export class CircleListComponent implements OnInit {

  circles:any[];

  constructor(
    private router: Router,
    private circleservice: CircleService,
    private socketService: SocketService,
    public dialog: MdDialog) { }

  ngOnInit() {
    let username = localStorage.getItem('username');
    this.circleservice.getCircles(username).subscribe((circles:any[]) => {
      this.circles = circles; });
  }

  selectCircle(circleId,index){

    this.socketService.subscribeCircle(circleId);
    this.circleservice.selectCircle(circleId);
    this.router.navigate(['/landingpage/userdashboard/circleinbox',circleId]);
  }

}

