import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IdinfoComponent } from './idinfo/idinfo.component';
import { MainPageComponent } from './main-page/main-page.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    IdinfoComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
