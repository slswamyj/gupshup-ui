import { Component, OnInit} from '@angular/core';
import { CircleService } from '../service/circle.service';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ChatBoxComponent } from '../chatbox/chatbox.component';
@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit{

  members:string[];
  member:string[];
  selectedOption: string;

  constructor(
    private router : Router,
    public dialog: MdDialog,
    private circleservice : CircleService) {
    this.circleservice.circleSelected$.subscribe((circle) => {
      this.circleservice.getMember(circle).subscribe((mem)=> {
        this.members=mem;
      });
    });
  }

  ngOnInit(){

  }

  selectMember(selectedUser) {
    this.dialog.open( ChatBoxComponent, {
      data: {
        'Member':selectedUser
      }
    });
  }

}