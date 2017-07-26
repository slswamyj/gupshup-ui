import { Component, OnChanges, AfterViewChecked } from '@angular/core';
import { CircleService } from '../services/circle.service';
import { Router} from '@angular/router';
import { ActivatedRoute,Params} from '@angular/router';
import { Circle} from '../model/Circle'; 
import { EditCircleComponent} from '../editcircle/editcircle.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DeleteCircleComponent} from '../deletecircle/deletecircle.component';

@Component({
  selector: 'circleinbox',
  templateUrl: './circleinbox.component.html',
  styleUrls: ['./circleinbox.component.css']
})
export class CircleInboxComponent implements AfterViewChecked {
  
  myinbox:any = [];
  circle:Circle;
  username: string;
  page = 0;
  circleId: string;

  constructor(
    private circleservice : CircleService,
    private router:Router,
    private route:ActivatedRoute,
    private dialog: MdDialog){
  } 

  ngOnInit() {	

    this.route.params.switchMap((param:Params) => {
      this.circleId = param['circle'];
      this.page = 0;
      return this.circleservice.getMailbox(param['circle'],this.page)})
    .subscribe((Circleinbox) => {
      this.myinbox = Circleinbox.reverse();
    });

    this.route.params.switchMap((param:Params) => 
      this.circleservice.getCircle(param['circle']))
    .subscribe((circle) => {
      this.circle = circle;
      this.circle.circleId = this.circleId;
    });

    this.circleservice.circleMessages$.subscribe((data) => {
      this.myinbox.push(data);
    });

    this.username = localStorage.getItem('username');
  }

  ngAfterViewChecked() {
    let msgbox = document.getElementById('inboxMessageDiv');
    msgbox.scrollTop = msgbox.scrollHeight;
  }

  editCircle() {
    this.dialog.open(EditCircleComponent, {
      'data': {
        'circle': this.circle
      }
    });
  }

  deleteCircle() {

    this.dialog.open(DeleteCircleComponent, {
      'data': {
        'circle': this.circle
      }
    });
  }

  getMailbox(page){
    if(page >= 0) {
      this.page = page;
      this.circleservice.getMailbox(this.circleId,page)
      .subscribe((Circleinbox) => {
        if(Circleinbox.length > 0)
          this.myinbox = Circleinbox.reverse();
      });
    }
  }

  deleteMail(mail) {
    this.myinbox = this.myinbox.filter((item) => {
      return item.mailID != mail.mailID });
    this.circleservice.deleteMail(mail).subscribe(data => console.log(data));
  }

  leaveCircle(circleId: string ){
    this.circleservice.leaveCircle(circleId, this.username).subscribe(data => {
      this.circleservice.removeCircle(this.circle);    
      this.router.navigate(['landingpage']);
    });
  }

  formatDate(time) {
    let temp = Math.floor((new Date().getTime() - time)/ 60000);
    if(temp < 1) 
      return "Just now";
    else if(temp < 60) 
      return temp +" min ago";
    else if(temp < (24*60))
      return Math.floor(temp/60)+ " hour ago";
    else if(temp< 24*60*30)
      return Math.floor(temp/(24*60))+ " days ago";
    else if(temp < 24*60* 365)
      return Math.floor(temp/(24*60*30))+" months ago";
  }
}


