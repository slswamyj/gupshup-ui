import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'userprofile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.css']
})

export class UserProfileComponent {
	model: any = {};

	constructor(
		private userProfileService: UserProfileService,
		private route: ActivatedRoute ){}

	ngOnInit(): void {

		this.userProfileService.getUser("randeep18")
			.subscribe(
				data => {
					this.model = data;
				},
				error =>{
					console.log(error);
				}
			);
	}
}
