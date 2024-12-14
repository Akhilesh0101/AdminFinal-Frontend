import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminRemedyFormComponent } from './admin-remedy-form/admin-remedy-form.component';
import { AdminHealthTipFormComponent } from './admin-health-tip-form/admin-health-tip-form.component';



@NgModule({
  declarations: [
    AppComponent,
  
  
   
    

  
 
   
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
    
  

  bootstrap: [AppComponent]
})
export class AppModule { }
