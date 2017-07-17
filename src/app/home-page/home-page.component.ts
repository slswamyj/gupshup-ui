import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
	moduleId: module.id,
  selector: 'home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css']
})

export class HomePageComponent implements OnInit {
  @ViewChild('openModal') openModal:ElementRef;

  constructor(
    private userService: UserService ){}

  ngOnInit(){
    this.openModal.nativeElement.click();
  }

  login(username: string, password: string) {
    this.userService.login(username, password);
  }
}
