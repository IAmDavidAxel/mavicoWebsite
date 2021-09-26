import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContactComponent} from "./contact/contact.component";
import {CommandComponent} from "./command/command.component";
import {OurServicesComponent} from "./our-services/our-services.component";
import {AboutComponent} from "./about/about.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'command', component: CommandComponent},
  {path:'services', component: OurServicesComponent},
  {path: 'about', component: AboutComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
