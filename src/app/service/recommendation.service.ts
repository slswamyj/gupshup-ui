import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecommendationService {
	constructor(private http:Http) {};
	result:Observable<any>;

	getFollow(id:String): Observable<any> {
		console.log("inside getfollow");
		console.log("id:"+id);
		this.result= this.http.get('http://localhost:8081/recommendationservice/recommendation/'+id)
		.map(response => response.json());
		console.log("uuuuuuu"+this.result);
		return this.result;
		
	}
}