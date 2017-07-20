import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { MdSnackBar } from '@angular/material';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})

export class RegisterComponent {
	model: any = {};
	
	/*genders = ['male','female'];*/

	constructor(
		private userService: UserService,
		private mdSnackBar: MdSnackBar){}

	register() {
		this.model.firstName = "";
		this.model.lastName = "";
		this.model.gender = "";
		this.model.emailId = "";
		this.model.contactNo = "";
		this.model.profilePhoto = "https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg";
		this.model.dob = "";
		this.model.following = [];
/*		if(this.model.lastName == null) {
			this.model.lastName = "";
		}*/
		this.userService.create(this.model)
			.subscribe(
				data => { 
					this.mdSnackBar.open("successfully registered", 'Close',  { duration:4000})
				},
				error => {
					console.log(error);
					this.mdSnackBar.open(error._body, 'Close',  { duration:4000})
					
				}
			);
	}
}