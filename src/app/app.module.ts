import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IdinfoComponent } from './idinfo/idinfo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SenatorComponent } from './senator/senator.component';
import { HouseRepComponent } from './house-rep/house-rep.component';
import { SenatorNestedComponent } from './senator-nested/senator-nested.component';
import { HouseRepNestedComponent } from './house-rep-nested/house-rep-nested.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    IdinfoComponent,
    MainPageComponent,
    SenatorComponent,
    HouseRepComponent,
    SenatorNestedComponent,
    HouseRepNestedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
