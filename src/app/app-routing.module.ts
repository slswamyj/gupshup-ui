import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CircleInboxComponent } from './circleinbox/circleinbox.component';
import { UserDashboardComponent } from './userdashboard/userdashboard.component';
import { UserInboxComponent } from './userinbox/userinbox.component';
import { CreateCircle } from './createcircle/createcircle.component';
import { PostComponent} from './post/post.component';
import { ChatBoxComponent } from './chatbox/chatbox.component';
import { MailboxComponent} from './mailbox/mailbox.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { CircleService } from './service/circle.service';

const routes : Routes = [
	{ path:'', pathMatch:"full", redirectTo: "userdashboard" },
	{ path:'', component: UserInboxComponent },
	{ path:'userdashboard', component: UserDashboardComponent, children: [
		{ path:'circleinbox',component: CircleInboxComponent },
		{ path:'circleinbox/:circle',component: CircleInboxComponent },
		{ path:'chatbox/:name',component: ChatBoxComponent }
	]},
	
	{ path:'circlememberinbox/:member',component: ChatBoxComponent },
 	{ path:'createcircle',component: CreateCircle},
 	{ path:'userprofile',component: UserProfileComponent },
 	{ path:'userprofile/:username', component: UserProfileComponent },
 	{ path:'updateprofile', component: UpdateProfileComponent }
];

@NgModule({
    
	imports: [ RouterModule.forRoot(routes)],
	providers: [ CircleService ],
	exports: [ RouterModule ]
})

export class AppRoutingModule{}

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
