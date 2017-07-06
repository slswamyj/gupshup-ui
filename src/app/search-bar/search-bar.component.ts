import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {
   private brandName = 'GupShup';
   constructor(private router: Router) {}

	search(username: string) {
		
		this.router.navigate(['userprofile', username]);	
	}
}
