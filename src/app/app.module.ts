import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routing, appRoutingProviders } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GupshupAppMaterialModule } from './gupshup-app-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { RightPanelComponent} from './rightpanel/rightpanel.component';
import { LeftPanelComponent } from './leftpanel/leftpanel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuComponent } from './menu/menu.component'
import { CircleListComponent } from './circlelist/circlelist.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserDashboardComponent } from './userdashboard/userdashboard.component';
import { EditCircleComponent } from './editcircle/editcircle.component';
import { DeleteCircleComponent } from './deletecircle/deletecircle.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CircleInboxComponent } from './circleinbox/circleinbox.component';
import { UserInboxComponent } from './userinbox/userinbox.component';
import { CreateCircle } from './createcircle/createcircle.component';
import { SearchComponent } from './search/search.component';
import { PostComponent} from './post/post.component';
import { ChatBoxComponent } from './chatbox/chatbox.component';
import { MailboxComponent} from './mailbox/mailbox.component';
import { InboxPanelComponent } from './inbox-panel/inbox-panel.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarHomeComponent } from './nav-bar-home/nav-bar-home.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { CircleService} from './services/circle.service';
import { UserProfileService } from './services/user-profile.service';
import { UpdateProfileService } from './services/update-profile.service';
import { UserService } from './services/user.service';


import { StompService } from 'ng2-stomp-service';


@NgModule({
  declarations: [
    AppComponent,
    CircleListComponent,
    UserListComponent,
    LeftPanelComponent,
    NavBarComponent,
    UserDashboardComponent,
    RightPanelComponent,
    MenuComponent,
    EditCircleComponent,
    DeleteCircleComponent,
    UserProfileComponent,
    UpdateProfileComponent,
    CircleInboxComponent,
    UserInboxComponent,
    CreateCircle,
    PostComponent,
    SearchComponent,
    ChatBoxComponent,
    MailboxComponent,
    InboxPanelComponent,
    HomeContentComponent,
    HomePageComponent,
    NavBarHomeComponent,
    RegisterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
  	HttpModule,
    GupshupAppMaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    EditCircleComponent,
    DeleteCircleComponent
  ],
  providers: [ 
    appRoutingProviders,
    CircleService,
    UserProfileService,
    UpdateProfileService,
    UserService,
    StompService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
