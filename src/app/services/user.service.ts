import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private geoData : any;
  private userName!: string;

  getData( this: any ) {
    return this.geoData;
  }
  public setData( data: any )
  {
      this.geoData = data;
  }

  getUserName() {
    return this.userName;
  }
  public setUserName( name: string ) {
    this.userName = name;
  }
}
