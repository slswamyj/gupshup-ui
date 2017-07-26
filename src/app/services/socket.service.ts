import { Injectable, OnInit } from '@angular/core';

import { StompService } from 'ng2-stomp-service';
import { CircleService } from './circle.service';

import { ChatMessage } from '../model/ChatMessage';

import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SocketService {

  private chatMessageSource = new Subject<ChatMessage>();
  socketUrl = 'http://172.23.238.203:8080/gs-guide-websocket';

  userSubscription: any;
  circleSubscription: any;

  chatMessages$ = this.chatMessageSource.asObservable();

  constructor(
    private stomp: StompService,
    private circleService: CircleService) {
    this.stomp.configure({
      host: this.socketUrl,
      debug: true,
      queue: {'init': false}
    });
    this.stomp.startConnect().then(() => {
      this.stomp.done('init');
      this.userSubscription = this.stomp.subscribe('/topic/chat/'+localStorage.getItem('username'),(message) => {
        console.log(JSON.parse(message)['message']);
        this.chatMessageSource.next(JSON.parse(message)['message']);
      });
    });
  }

  subscribeCircle(circleId:string) {
    if(this.circleSubscription != null)
      this.circleSubscription.unsubscribe();

    this.circleSubscription = this.stomp.subscribe('/topic/message/'+circleId,(message) => {
      this.circleService.setMessage(message);
    });
  }
 
  sendMessage(userName:string, message: string) {
    let chatMessage = new ChatMessage(userName, localStorage.getItem('username'), message);
    this.stomp.send('/topic/chat/'+ userName,JSON.stringify({"message": chatMessage}));
    this.chatMessageSource.next(chatMessage);
  }

  logoutNotify(){
    this.stomp.send('/app/logout/'+localStorage.getItem('username'),{"message":"logout notification"});
    this.stomp.disconnect().then(() => {
      console.log( 'Connection closed' )
    });
  }

}
