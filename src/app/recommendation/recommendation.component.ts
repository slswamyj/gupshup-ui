import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { RecommendationService } from '../service/recommendation.service';

@Component({
  selector: 'recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  constructor( private route:ActivatedRoute, private recommendationService:RecommendationService) {};
  one :any;

  ngOnInit() {

  	this.recommendationService.getFollow("Sally Myer")
  			  .subscribe((data) => {
            this.one = data; 
            console.log("first"+this.one); });
          
  }


}
