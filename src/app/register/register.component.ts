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
	loading = false;
	
	genders = ['male','female'];

	constructor(
		private userService: UserService,
		private mdSnackBar: MdSnackBar){}

	register() {
		this.loading = true;
		this.model.contactNo = "";
		this.model.dob = "";
		this.model.profilePhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RPebtJzQWUs1L1sP3dnYv5aSq2KTGk4lsKV7-QUdlVH2_D_W";
		this.model.following = [];
		if(this.model.lastName == null) {
			this.model.lastName = "";
		}
		this.userService.create(this.model)
			.subscribe(
				data => { 
					this.mdSnackBar.open("successfully registered", 'Close',  { duration:4000})
				},
				error => {
					console.log(error);
					this.mdSnackBar.open("successfully registered", 'Close',  { duration:4000})
				}
			);
	}
}