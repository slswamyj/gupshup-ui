import { Observable } from 'rxjs/Rx';
import { CreateCircle } from '../createcircle/createcircle.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import { Circle } from '../model/Circle';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CircleService {

    private selectCircleSource = new Subject<string>();
    private selectMemberSource = new Subject<string>();
    private chatMessageSource = new Subject<string>();

    private uname : string;
    private msg : string;
    private message: string;
    private saveCircleUrl = "http://172.23.239.176:8080/circleservice/circle";
    private getCirlclesUrl = "http://172.23.239.176:8080/circleservice/circle/";
    
    constructor(private http: Http) {

    }

    // Observable string streams
    circleSelected$ = this.selectCircleSource.asObservable();
    memberSelected$ = this.selectMemberSource.asObservable();
    chatMessages$ = this.chatMessageSource.asObservable();

    public setMessage(message: string) {
        this.chatMessageSource.next(message);
    }

    public selectCircle(circle: string) {
        this.selectCircleSource.next(circle);
    }

    // public selectMember(member: string) {
        //     this.selectMemberSource.next(member);
        // }

        public getCircles(): Observable<any> {
            console.log("update");
            return this.http.get(this.getCirlclesUrl+localStorage.getItem("username")+"/circles")
            .map((res:any) => res.json());

        }

        public getcircleKeywords(cname: string):Observable<any> {
            return this.http.get("assets/gupshup.json")
            .map((res:any) => {
                let circles = res.json() as any[];
                circles = circles.filter((item) => item.circleName === cname);

                return circles[0].keywords;
            });

        }
        public getcircleDescription(cname: string):Observable<any> {
            return this.http.get("assets/gupshup.json")
            .map((res:any) => {
                let circles = res.json() as any[];
                circles = circles.filter((item) => item.circleName === cname);

                return circles[0].circleDescription;
            });

        }
        public getMember(circleId: string):Observable<any> {
            return this.http.get(this.getCirlclesUrl+circleId+"/members")
            .map((res:any) => {
                let members = res.json() as any[];
                console.log(Observable.of(members));
                return members;
            });

        }
        public getUsers(): Observable<any> {
            return this.http.get("assets/userlist.json")
            .map((res:any) => res.json());
        }

        getMemberinbox(member:string)
        { 
            return Observable.of(member);
        }
        getCircleinbox(circle:string)
        { 
            console.log(circle+"here");
            return this.http.get(this.getCirlclesUrl+circle+"/mailbox?userName="+localStorage.getItem("username")+"&page=0").map(res => res.json());
        }
        getUserName(name:string)
        {
            //console.log("getusername");
            this.uname=name;
            //console.log(this.uname);
            return this.uname;
        }
        getMsg(message:string)
        {

            this.msg=message;
            console.log("get msg in service"+this.msg);
            //this.sendMsg();
            return this.msg;

        }
        sendUserName()
        {
            console.log("nameeeee"+this.uname);    
            return this.uname;
        }
        sendMsg()
        {
            console.log("send msg in service"+this.msg);
            return this.msg;
        }

        saveCircleIn(circle: Circle) {
            return this.http.post(this.saveCircleUrl, circle).map((response) => response.json());
        }
        deleteCircleIn(circle:Circle){
            return this.http.delete('http://localhost:8080/circleservice',circle).map((response) => response.json());
        }

        create(circleName: string, description: string, keywords: string[]) {

        }
    }
