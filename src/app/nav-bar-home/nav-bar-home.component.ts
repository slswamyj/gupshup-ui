import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

/*import { LoginComponent } from '../login/login.component';*/
import { UserService } from '../services/user.service';

@Component({
	moduleId: module.id,
  selector: 'nav-bar-home',
  templateUrl: 'nav-bar-home.component.html',
  styleUrls: ['nav-bar-home.component.css']
})

export class NavBarHomeComponent implements OnInit {
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
