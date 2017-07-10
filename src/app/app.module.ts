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

import { CircleService} from './service/circle.service';
import { UserProfileService } from './service/user-profile.service';
import { UpdateProfileService } from './service/update-profile.service';
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
    InboxPanelComponent
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
    StompService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
