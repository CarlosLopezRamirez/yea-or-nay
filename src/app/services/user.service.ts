import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private geoData : any;
  private userName!: string;
  private userSenator!: string;
  private userHouseRep!: string;

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

  getUserSenator() {
    return this.userSenator;
  }
  public setUserSenator( senator: string ) {
    this.userSenator = senator;
  }

  getUserHouseRep() {
    return this.userHouseRep;
  }
  public setUserHouseRep( houseRep : string ) {
    this.userHouseRep = houseRep;
  }
}
