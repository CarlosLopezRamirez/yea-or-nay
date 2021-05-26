import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdinfoComponent } from './idinfo/idinfo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SenatorComponent } from './senator/senator.component';
import { HouseRepComponent } from './house-rep/house-rep.component';

const routes: Routes = [
  { path: '', component: IdinfoComponent },
  { path: 'mainpage', component: MainPageComponent },
  { path: 'senator', component: SenatorComponent },
  { path: 'house-rep', component: HouseRepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
