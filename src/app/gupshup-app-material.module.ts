import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdDialogModule,MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MaterialModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MaterialModule
 ]
})
export class GupshupAppMaterialModule { }
