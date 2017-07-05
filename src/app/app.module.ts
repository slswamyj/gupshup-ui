import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './approuting.module';
import {RightPanelComponent} from './rightpanel/rightpanel.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {LeftPanelComponent} from './leftpanel/leftpanel.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import { MaterialModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component'
import { Routes,RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';

import { CircleListComponent } from './circlelist/circlelist.component';
import { UserListComponent } from './userlist/userlist.component';

import { UserDashboardComponent } from './userdashboard/userdashboard.component';


import { AppComponent } from './app.component';

import { CircleService} from './service/circle.service';
import {MovieAppMaterialModule} from './movie-app-material.module';
import {EditCircleComponent} from './editcircle/editcircle.component';
import {DeleteCircleComponent} from './deletecircle/deletecircle.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CircleListComponent,
    UserListComponent,
    LeftPanelComponent,
    SearchBarComponent,
    UserDashboardComponent,
    RightPanelComponent,
    MenuComponent,
    EditCircleComponent,
    DeleteCircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  	HttpModule,
  	BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MdButtonModule,
     MdCardModule, 
     MdMenuModule, 
     MdToolbarModule, 
     MdIconModule, 
     MdInputModule,
     AppRoutingModule,
    ReactiveFormsModule
   
  ],
  entryComponents: [
        EditCircleComponent,
        DeleteCircleComponent

    ],
  providers: [ CircleService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
