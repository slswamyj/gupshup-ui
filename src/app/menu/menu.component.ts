import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private userService: UserService){ }

  logout() {
    this.userService.logout();
  }
}