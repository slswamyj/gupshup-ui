import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../model/User';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UpdateProfileService {
	
	constructor(private http : Http) {}

	updateUserProfile(user : User) : Observable<any> {
		let url = 'http://172.23.239.176:8080/userservice/user/';		
		return this.http.put(url+user.userName, user)
			.map((response : Response) => response.json());
	}

}
