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
        return this.http.get("assets/gupshup.json")
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
    public getMember(cname: string):Observable<any> {
        return this.http.get("assets/gupshup.json")
        .map((res:any) => {
            let circles = res.json() as any[];
            circles = circles.filter((item) => item.circleName === cname);
           
            return circles[0].members;
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
        return Observable.of(circle);
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
    return this.http.post('http://localhost:8080/circleservice',circle).map((response) => response.json());
  
    }
    deleteCircleIn(circle:Circle){
 return this.http.delete('http://localhost:8080/circleservice',circle).map((response) => response.json());
   }
}
