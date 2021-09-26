import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CommandComponent } from './command/command.component';
import { ContactComponent } from './contact/contact.component';
import {NgsRevealModule} from "ngx-scrollreveal";
import { OurWorkComponent } from './our-work/our-work.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgsRevealModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    OurServicesComponent,
    CommandComponent,
    ContactComponent,
    OurWorkComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
