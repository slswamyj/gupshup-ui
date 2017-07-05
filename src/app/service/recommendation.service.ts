import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecommendationService {
	constructor(private http:Http) {};
	result:Observable<any>;
	circle:Observable<any>;

	getFollow(id:String): Observable<any> {
		this.result= this.http.get('http://localhost:8081/recommendationservice/recommendation/'+id)
		.map(response => response.json());
		
		return this.result;
		
	}

	getCircle(id:String): Observable<any> {
		this.circle = this.http.get('http://localhost:8081/recommendationservice/recommendation/circle/'+id)
		.map(response => response.json());

		return this.circle;
	}
}