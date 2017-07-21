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
  user: User;

  constructor(
    private router: Router,
    private circleservice: CircleService,
    private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.circleservice.suggestCircle()
    .subscribe(data => this.circles = data);
    this.userProfileService.getUser(localStorage.getItem('username'))
    .subscribe(data => this.user = data);
  }

  search(circleId: string) {
    this.router.navigate(['circleinbox', circleId]);	
  }

  joinCircle(circle: Circle){
    this.circleservice.joinCircle(circle, this.user).subscribe( data => {
      this.circleservice.addCircle(circle);
      console.log(data +"here");
    });
  }
}
