import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { CreateCircle } from '../createcircle/createcircle.component';
import { Circle } from '../model/Circle';
import { User } from '../model/User';
import { Member } from '../model/Member';

import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CircleService implements OnInit{

    private selectCircleSource = new BehaviorSubject<string>(undefined);
    private selectMemberSource = new BehaviorSubject<string>(undefined);
    private circleMessageSource = new Subject<string>();

    private circleServiceUrl = 'http://172.23.239.176:8080/circleservice/circle/';
    private mailboxServiceUrl = 'http://172.23.239.176:8080/mailboxservice/mailbox/';
    private activityProducerUrl = 'http://172.23.239.176:8080/activityproducer/activity';
    
    constructor(private http: Http) { }

    ngOnInit() {
    }

    // Observable string streams
    circleSelected$ = this.selectCircleSource.asObservable();
    memberSelected$ = this.selectMemberSource.asObservable();
    circleMessages$ = this.circleMessageSource.asObservable();

    public setMessage(message: string) {
        this.circleMessageSource.next(message);
    }

    public selectCircle(circleName: string) {
        this.selectCircleSource.next(circleName);
    }

    public selectMember(userName: string) {
        this.selectMemberSource.next(userName);
    }

    getCircle(circleId: string) {
        return this.http.get(this.circleServiceUrl + circleId)
        .map((response) => response.json());
    }

    suggestCircle() {
        return this.http.get(this.circleServiceUrl)
        .map((response) => response.json());
    }

    saveCircle(circle: Circle) {
        return this.http.post(this.circleServiceUrl, circle)
        .map((response) => response.json());
    }

    deleteCircle(circleId: string) {
        return this.http.delete(this.circleServiceUrl + circleId)
        .map((response) => response.json());
    }

    updateCircle(circle: Circle) {
        return this.http.put(this.circleServiceUrl + circle.circleId, circle)
        .map((response) => response.json());
    }

    getCircles(username: string): Observable<any> {
        return this.http.get(this.circleServiceUrl + username + '/circles')
        .map((res: any) => res.json());
    }

    getMembers(circleId: string): Observable<any> {
        return this.http.get(this.circleServiceUrl + circleId + '/members')
        .map((res:any) => res.json());
    }

    getMailbox(circleId, page) {
        let username = localStorage.getItem('username');
        return this.http.get(this.mailboxServiceUrl + circleId + '?userName=' + username + '&page=' + page)
        .map((res:any) => res.json());
    }  

    deleteMail(mail: any) {
        let username = localStorage.getItem('username');
        return this.http.post(this.mailboxServiceUrl + username, mail)
        .map((res:any) => res.json());
    }

    postMessage(message: string, circleId: string) {
        let userName = localStorage.getItem('username');
        let add = {
            '@context': 'https://www.w3.org/ns/activitystreams',
            'summary': userName +'added a note',
            'type': 'Add',
            'actor': {
                'type': 'Person',
                'id': userName,
            },
            'object': {
                'type': 'Note',
                'content': message
            },
            'target': {
                'type': 'Group',
                'id': circleId
            }
        };
        console.log(add);
        return this.http.post(this.activityProducerUrl + '/add', add)
        .map((res:any) => res.json());
    }

    joinCircle(circle: Circle, user: User) { 
        let join = {
            "@context": "https://www.w3.org/ns/activitystreams",
            "summary": user.userName + ' joined '+ circle.circleName,
            "type": "Join",
            "actor": {
                "type": "Person",
                "id": user.userName,
                "name": user.firstName + " " +user.lastName
            },
            "object": {
                "type": "Group",
                "id": circle.circleId,
                "name": circle.circleName
            }
        };

        console.log(join);
        return this.http.post(this.activityProducerUrl + '/join', join)
        .map((res:any) => res.json());
    }

    leaveCircle(circleId:string, userName: string) {
        let leave =  {
            "@context": "https://www.w3.org/ns/activitystreams",
            "summary": userName + " left " + circleId,
            "type": "Leave",
            "actor": {
                "type": "Person",
                "id": userName,
            },
            "object": {
                "type": "Place",
                "id": circleId,
            }
        };
        return this.http.post(this.activityProducerUrl + '/join', leave)
        .map((res:any) => res.json());
    }

}
