import { Component, OnInit,Inject } from '@angular/core';
import { CircleService } from '../service/circle.service';
import { Router} from '@angular/router';
import { ActivatedRoute,Params} from '@angular/router';
import { StompService } from 'ng2-stomp-service';
import { MdDialogRef, MdDialog,MdDialogConfig,MD_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatBoxComponent implements OnInit {
  private url = 'http://172.23.239.155:8087/gs-guide-websocket';
  private subscription: any;
  private to: string;
  private from: string;
  private messages:string[]=[];

  constructor(
    private stomp: StompService,
    private circleservice:CircleService,
    public dialogRef: MdDialogRef<ChatBoxComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
    this.to = data.Member;
    this.stomp.configure({
      host: this.url,
      debug: true,
      queue: {'init': false}
    });
  }

  connect() {
    this.stomp.startConnect().then(() => {
      this.stomp.done('init');
      console.log('connected');
    });   
  }

  ngOnInit() {
    this.from = localStorage.getItem("username");
    console.log(this.from);
    this.connect();
    this.circleservice.chatMessages$.subscribe((message: any) => {
      this.messages.push(message.name);
    });
  }
  
  send(message) {
    this.stomp.send("/app/chat/"+this.to, JSON.stringify({name:message}));
    this.messages.push(message);
  }

}