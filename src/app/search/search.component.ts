import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
	
	constructor(private router: Router) {}

	/*name: string;*/

	search(username: string) {
		/*this.name = username;*/
		this.router.navigate(['userprofile', username]);	
	}
}
