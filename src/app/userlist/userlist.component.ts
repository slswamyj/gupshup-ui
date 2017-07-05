import { Component, OnInit} from '@angular/core';
import { CircleService } from '../service/circle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit{
constructor(private router : Router,private circleservice : CircleService) {
 
   
}


members:String[];
ngOnInit(){
	
}



}