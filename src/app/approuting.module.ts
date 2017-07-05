import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CircleService} from './service/circle.service';
import { Routes,RouterModule} from '@angular/router';
import { CircleInboxComponent } from './circleinbox/circleinbox.component';
import { UserInboxComponent } from './userinbox/userinbox.component';
import { CreateCircle } from './createcircle/createcircle.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PostComponent} from './post/post.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { MaterialModule } from '@angular/material';
import { MailboxComponent} from './mailbox/mailbox.component';

const routes:Routes=[{path:'',component: UserInboxComponent},
{path:'circleinbox',component: CircleInboxComponent},
{path:'circlememberinbox/:member',component: ChatboxComponent},
 {path:'createcircle',component: CreateCircle},
 {path:'circleinbox/:circle',component: CircleInboxComponent}
];

@NgModule({
	declarations: [
	CircleInboxComponent,
     ChatboxComponent,
     CreateCircle,
     UserInboxComponent,
     PostComponent,
      MailboxComponent

	],
    
	  imports: [ BrowserModule,
	  MaterialModule,
	  ReactiveFormsModule,
	  RouterModule.forRoot(routes)],
	  providers: [ CircleService ],
	  exports: [RouterModule]
	  
})

export class AppRoutingModule
{}