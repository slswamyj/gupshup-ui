import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../model/User';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserProfileService {

	userServiceUrl = 'http://172.23.239.176:8080/userservice/user/';
  activityProducerUrl = "http://172.23.239.176:8080/activityproducer/activity";
  
  constructor(private http : Http) { }
  
  getUser(username: string) {
    return this.http.get(this.userServiceUrl + username)
    .map((response: Response) => response.json());
  }

  suggestUser(keywords: string) {
    return this.http.get(this.userServiceUrl + "/suggest/" + keywords)
    .map((response: Response) => response.json());
  }

  updateUser(user : User) : Observable<any> {
    return this.http.put(this.userServiceUrl + user.userName, user)
    .map((response : Response) => response.json());
  }

  followUser(followed: string) {
    let follower = localStorage.getItem('username');
    let follow = {
      "@context": "https://www.w3.org/ns/activitystreams",
      "summary": follower + " followed "+ followed,
      "type": "Follow",
      "actor": {
        "type": "Person",
        "id": follower
      },
      "object": {
        "type": "Person",
        "id": followed
      }
    };
    return this.http.post(this.activityProducerUrl + "/follow", follow)
    .map((response: Response) => response.json());
  }

}
