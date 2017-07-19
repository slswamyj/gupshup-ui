import { Component, OnInit } from '@angular/core';

import { RecommendationService } from '../services/recommendation.service';

@Component({
  selector: 'rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightPanelComponent implements OnInit{

  constructor( private recommendationService: RecommendationService) { }

  ngOnInit() {
    // let username = localStorage.getItem('username');
    // this.recommendationService.recommendUsers(username).subscribe( data => 
    //   console.log(data));
    // this.recommendationService.recommendCircles(username).subscribe( data =>
    //   console.log(data));
  }
}
