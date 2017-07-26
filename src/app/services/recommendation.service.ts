import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecommendationService {

	recommendationServiceUrl = 'http://172.23.238.204:8080/recommendationservice/recommendation/';

	constructor(private http:Http) { };

	recommendUsers(userName: string) {
		return this.http.get(this.recommendationServiceUrl +"user/"+ userName)
		.map(response => { 
			return response.json()});
	}

	recommendCircles(userName: string) {
		return this.http.get(this.recommendationServiceUrl+"circle/" + userName)
		.map(response => { 
			return response.json()});
	}
	
}