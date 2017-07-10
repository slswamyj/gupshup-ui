import { Component } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

/*import { LoginComponent } from '../login/login.component';*/
import { UserService } from '../services/user.service';

@Component({
	moduleId: module.id,
  	selector: 'nav-bar-home',
  	templateUrl: 'nav-bar-home.component.html',
  	styleUrls: ['nav-bar-home.component.css']
})

export class NavBarHomeComponent {
	
	constructor(
    private dialog: MdDialog,
    private userService: UserService ){}

  login(username: string, password: string) {
      this.userService.login(username, password);
    }

	/*openDialog() {
    let dialogRef: MdDialogRef<LoginComponent>;
    dialogRef = this.dialog.open(LoginComponent);
    return dialogRef.afterClosed();


  }*/
}
