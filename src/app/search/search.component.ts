import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Circle } from '../model/Circle';
import { User } from '../model/User';
import { CircleService } from '../services/circle.service';
import { UserProfileService } from '../services/user-profile.service';


@Component({
  selector: 'search-bar',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit{
	
  circles: Circle[];
  users: User[];
  user: User;

  constructor(
    private router: Router,
    private circleservice: CircleService,
    private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.userProfileService.getUser(localStorage.getItem('username'))
    .subscribe(data => {
      this.user = data;
    });
  }

  suggestUser(keywords: string){
    this.userProfileService.suggestUser(keywords).subscribe( data => {
      this.users = data;
      this.users = this.users.slice(0,10);
    });
  }

  suggestCircle(keywords: string){
    this.circleservice.suggestCircle(keywords).subscribe( data => {
      this.circles = data;
      if(this.circles != null)
        this.circles = this.circles.slice(0,10);
    });
  }

  joinCircle(circle: Circle){
    this.circleservice.joinCircle(circle, this.user).subscribe( data => {
      this.circleservice.addCircle(circle);
      console.log(data);
    });
  }

  followUser(user: User) {
    this.userProfileService.followUser(user.userName).subscribe( data => {
      console.log(data);
    });
  }
}
