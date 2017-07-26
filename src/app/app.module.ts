import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { CreateCircle } from './createcircle/createcircle.component';
import { SearchComponent } from './search/search.component';
import { PostComponent} from './post/post.component';
import { InboxPanelComponent } from './inbox-panel/inbox-panel.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserinboxComponent } from './userinbox/userinbox.component';


import { CircleService} from './services/circle.service';
import { UserProfileService } from './services/user-profile.service';
import { UpdateProfileService } from './services/update-profile.service';
import { UserService } from './services/user.service';
import { SocketService } from './services/socket.service';
import { RecommendationService } from './services/recommendation.service';
import { CanActivateViaAuthGuard } from './services/auth-guard.service';

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
    CreateCircle,
    PostComponent,
    SearchComponent,
    InboxPanelComponent,
    HomeContentComponent,
    HomePageComponent,
    RegisterComponent,
    LandingPageComponent,
    UserinboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  	HttpModule,
    GupshupAppMaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    EditCircleComponent,
    DeleteCircleComponent,
    CreateCircle
  ],
  providers: [ 
    CircleService,
    UserProfileService,
    UpdateProfileService,
    UserService,
    StompService,
    SocketService,
    RecommendationService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
