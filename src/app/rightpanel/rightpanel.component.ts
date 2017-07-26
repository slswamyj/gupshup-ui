import { Component, OnInit, OnChanges } from '@angular/core';

import { RecommendationService } from '../services/recommendation.service';

import { Circle } from '../model/Circle';
import { User } from '../model/User';

import { CircleService } from '../services/circle.service';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightPanelComponent implements OnInit, OnChanges{

  circles: any[];
  users: any[];
  user: User;

  constructor( 
    private recommendationService: RecommendationService,
    private circleservice: CircleService,
    private userProfileService: UserProfileService ) { }

  ngOnInit() {
    this.userProfileService.getUser(localStorage.getItem('username'))
    .subscribe(data => {
      this.user = data;
      this.recommendCircle();
      this.recommendUser();
    })
  }

  ngOnChanges(){

  }

  recommendUser(){
    this.recommendationService.recommendUsers(this.user.userName).subscribe( data => {
      this.users = data.slice(0,3);
    });
  }

  recommendCircle(){
    this.recommendationService.recommendCircles(this.user.userName).subscribe( data => {
      this.circles = data.slice(0,3);
    });
  }

  joinCircle(circle: Circle){
    this.circleservice.joinCircle(circle, this.user).subscribe( data => {
      this.circleservice.addCircle(circle);
      this.circles = this.circles.filter( c => c.circleId != circle.circleId);
    });
  }

  followUser(user) {
    this.userProfileService.followUser(user.name).subscribe( data => {
      this.users = this.users.filter( u => u.name != user.name);
    });
  }
}
