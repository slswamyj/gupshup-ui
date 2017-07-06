import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../model/User';

@Injectable()
export class UserProfileService {

	constructor(private http: Http){}

	getUser(username: string) {
		return this.http.get('http://172.23.239.159:8081/userservice/user/'+username)
		.map((response: Response) => {
			console.log(response.json());
			return response.json();
		});
	}
}

