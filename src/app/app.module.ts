import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { CompteComponent } from './composants/compte/compte.component';
import { ClientComponent } from './composants/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NewClientComponent } from './composants/new-client/new-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompteComponent,
    ClientComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
