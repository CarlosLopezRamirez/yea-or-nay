import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdinfoComponent } from './idinfo/idinfo.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: IdinfoComponent },
  { path: 'mainpage', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
