import { Component } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { CircleService } from '../services/circle.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  circleId: string;

  constructor(
    private circleService: CircleService,
    private route:ActivatedRoute ) {
    this.route.params.subscribe((param:Params) => this.circleId = param['circle']); 
  }

  sendMessage(message: string) {
    console.log(this.circleId);
    this.circleService.postMessage(message, this.circleId)
    .subscribe((data) => {
      console.log(data);
    });
  }

}
