import { Component, OnInit} from '@angular/core';
import { CircleService } from '../services/circle.service';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit{

  members:string[];

  constructor(
    private router : Router,
    private circleservice : CircleService) {
    this.circleservice.circleSelected$.subscribe((circle) => {
      this.circleservice.getMembers(circle.circleId).subscribe((members)=> {
        this.members=members.filter( mem => mem.status == 1 && mem.username!= localStorage.getItem('username'));
        this.members = this.members.slice(0,6);
      });
    });
  }

  ngOnInit(){

  }

  selectMember(selectedUser) {
    this.router.navigate(['/landingpage/userdashboard/userinbox',selectedUser]);
  }

}