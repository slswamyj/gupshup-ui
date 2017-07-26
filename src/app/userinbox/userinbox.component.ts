import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { SocketService } from '../services/socket.service';
import { ChatMessage } from '../model/ChatMessage';

@Component({
  selector: 'app-userinbox',
  templateUrl: './userinbox.component.html',
  styleUrls: ['./userinbox.component.css']
})
export class UserinboxComponent implements OnInit {

  chatTo : string;
  chatMessages : ChatMessage[] = [];
  username:string;

  constructor(
    private socketService : SocketService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    
    this.route.params.subscribe((param) => {
      this.chatTo = param['username'];
    });

    this.socketService.chatMessages$.subscribe((msg) => {
      console.log("message-----------"+ msg);
      this.chatMessages.push(msg);
    });
  }

  sendMessage(message: string) {
    this.socketService.sendMessage(this.chatTo, message);
  }

}
