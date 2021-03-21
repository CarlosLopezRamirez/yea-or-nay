import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private geoData : any;

  getData( this: any ) {
    return this.geoData;
  }
  public setData( data: any )
  {
      this.geoData = data;
  }
}
