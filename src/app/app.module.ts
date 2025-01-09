import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import du FormsModule
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componants/auth/login/login.component';
import { MdpOublieComponent } from './Componants/mdp-oublie/mdp-oublie.component';
import { SignUpComponent } from './Componants/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    MdpOublieComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
