import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';

import { User } from '../model/User';

@Injectable()
export class UserService {
	constructor(private http: Http){}

	create(user: User) {
		return this.http.post('http://172.23.239.160:8080/userservice/user', user)
		.map((response: Response) => {
			console.log(response.json());
			return response.json();
		});
	}

	login(username: string, password: string) {
		var basicHeader = btoa('gupshup:stackroute');

		var headers = new Headers();
    	headers.append('Content-Type', 'application/x-www-form-urlencoded');
    	headers.append('Authorization', 'Basic ' + basicHeader);
    	let options = new RequestOptions({headers: headers});
		
		// let body = new URLSearchParams();
		// body.set("grant_type", "password");
		// body.set("username", username);	
		// body.set("password", password);
		let body = "username="+username+"&password="+encodeURIComponent(password)+"&grant_type=password&"+
		"client_secret=stackroute&client_id=gupshup";

		this.http.post('http://172.23.239.202:9000/oauth/token', body, options)
			.subscribe(data => {
				/*console.log(data);*/
				console.log(data.json());
				localStorage.setItem('username', username);
				localStorage.setItem('access_token', data.json().access_token);
				localStorage.setItem('refresh_token', data.json().refresh_token);
			});
	}
}

