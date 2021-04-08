import { Component} from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idinfo',
  templateUrl: './idinfo.component.html',
  styleUrls: ['./idinfo.component.scss'],
  providers: []
})
export class IdinfoComponent {
  constructor(private _userService: UserService, private router: Router) { }
  
  zipCode!: string;
  state!: string;
  streetAddress!: string;
  city!: string;

  userName!: string;

  fullAddress!: string;

  geoData: any;
  geoKey: string = environment.geoKey;

  onClick() {
    const Geocodio = require('geocodio-library-node');
    const geocoder = new Geocodio(this.geoKey, 'api.geocod.io', "v1.6");

    this.fullAddress = 
      this.streetAddress + 
      ", " + 
      this.city + 
      " " + 
      this.state;

    geocoder.geocode(this.fullAddress, ['cd117'])
    .then((response: any) => {
      this.geoData = response;
      this._userService.setData(this.geoData);
      this._userService.setUserName(this.userName);
      sessionStorage.setItem('userData', JSON.stringify(this.geoData));
      sessionStorage.setItem('userName', this.userName);
      this.router.navigate(['mainpage']);
    })
  } // onClick
}