import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContactComponent} from "./contact/contact.component";
import {CommandComponent} from "./command/command.component";
import {OurServicesComponent} from "./our-services/our-services.component";
import {AboutComponent} from "./about/about.component";
import {OurWorkComponent} from "./our-work/our-work.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'work', component: OurWorkComponent}
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
