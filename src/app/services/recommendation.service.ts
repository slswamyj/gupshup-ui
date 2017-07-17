import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecommendationService {

	recommendationServiceUrl = 'http://localhost:8081/recommendationservice/recommendation/';

	constructor(private http:Http) { };

	recommendUsers(userName: string) {
		return this.http.get(this.recommendationServiceUrl + userName)
		.map(response => response.json());
	}

	recommendCircles(userName: string) {
		this.http.get(this.recommendationServiceUrl + userName +"/circles")
		.map(response => response.json());
	}
	
}