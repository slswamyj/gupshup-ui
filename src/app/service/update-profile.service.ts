import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Injectable()
export class UpdateProfileService {
	
	constructor(private http : Http) {}

	updateUserProfile(user : User) : Observable<any> {
		
		console.log("***");
		console.log(user);
		let url = 'http://localhost:8081/userservice/user/';		
		return this.http.put(url+user.userName, user)
			.map((response : Response) => response.json());
		//.catch(this.errorHandler);
	}

	/*errorHandler ( error : Response | any) {
		let errorMsg : string;
		const err = JSON.stringify(error.json() || '');
		errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;


		return Observable.throw(errorMsg);
	}*/

}
