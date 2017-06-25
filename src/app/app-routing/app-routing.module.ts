import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PricesComponent} from '../prices/prices.component';
import {RouterModule} from '@angular/router';
import {ScheduleComponent} from '../schedule/schedule.component';
import {AboutComponent} from '../about/about.component';
import {FrontPageComponent} from '../front-page/front-page.component';

const ROUTES = [
  {path: 'home', pathMatch: 'full', component: FrontPageComponent}
  , {path: 'prices', component : PricesComponent}
  , {path: 'about', component : AboutComponent}
  , {path: 'schedule', component : ScheduleComponent}
  , {path: '', redirectTo: 'home', pathMatch: 'full'}

]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(ROUTES)]
    , exports: [RouterModule]
    , declarations: []
})
export class AppRoutingModule { }
