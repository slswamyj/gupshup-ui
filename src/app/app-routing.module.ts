import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CircleInboxComponent } from './circleinbox/circleinbox.component';
import { UserDashboardComponent } from './userdashboard/userdashboard.component';
import { UserInboxComponent } from './userinbox/userinbox.component';
import { CreateCircle } from './createcircle/createcircle.component';
import { PostComponent } from './post/post.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchComponent } from './search/search.component';

const routes : Routes = [
	{ path:'', pathMatch:"full", redirectTo: "userdashboard" },
	{ path:'', component: UserInboxComponent },
	{ path:'userdashboard', component: UserDashboardComponent, children: [
		{ path:'circleinbox',component: CircleInboxComponent },
		{ path:'circleinbox/:circle',component: CircleInboxComponent }
	]},
	
	{ path:'circlememberinbox/:member',component: ChatboxComponent },
 	{ path:'createcircle',component: CreateCircle},
 	{ path:'userprofile',component: UserProfileComponent },
 	{ path:'userprofile/:username', component: UserProfileComponent },
 	{ path:'updateprofile', component: UpdateProfileComponent },
 	{ path:'search', component: SearchComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})

export class AppRoutingModule{}

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);