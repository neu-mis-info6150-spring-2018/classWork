import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChildNavBarComponent } from './child-nav-bar/child-nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChildNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
