import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InfoTrippComponent} from "./info-tripp/info-tripp.component";

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'info',component: InfoTrippComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
