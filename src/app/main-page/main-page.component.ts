import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { browserRefresh } from '../app.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: []
})
export class MainPageComponent implements OnInit {
  userName!: string;
  userHouseRep!: string;
  userDistrict!: string;
  userSenator1!: string;
  userSenator2!: string;
  browserRefresh!: boolean;

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {

    if (browserRefresh) {
      const data = sessionStorage.getItem('userData');
      this.userName = sessionStorage.getItem('userName')!;
      this._userService.setData(JSON.parse(data!));
      this._userService.setUserName(this.userName); 
      console.log('This page was refreshed');
    }

    // GATHER USER REPRESENTATIVE INFORMATION
    this.userHouseRep = this._userService.getData()["results"][0]["fields"]["congressional_districts"][0]["current_legislators"][0]["bio"]["first_name"] + " " +
    this._userService.getData()["results"][0]["fields"]["congressional_districts"][0]["current_legislators"][0]["bio"]["last_name"];

    this.userSenator1 = this._userService.getData()["results"][0]["fields"]["congressional_districts"][0]["current_legislators"][1]["bio"]["first_name"] + " " +
    this._userService.getData()["results"][0]["fields"]["congressional_districts"][0]["current_legislators"][1]["bio"]["last_name"];

    this.userSenator2 = this._userService.getData()["results"][0]["fields"]["congressional_districts"][0]["current_legislators"][2]["bio"]["first_name"] + " " +
    this._userService.getData()["results"][0]["fields"]["congressional_districts"][0]["current_legislators"][2]["bio"]["last_name"];

    // GATHER USER DISTRICT
    this.userDistrict = this._userService.getData()["results"][0]["fields"]["congressional_districts"][0]["name"];

    // GATHER USER NAME
    this.userName = this._userService.getUserName();
  }

  senatorClick(senator: string) {
    if (senator == this.userSenator1) {
      sessionStorage.setItem('userSenator', this.userSenator1);
      this._userService.setUserSenator(this.userSenator1);
    }
    if (senator == this.userSenator2) {
      sessionStorage.setItem('userSenator', this.userSenator2);
      this._userService.setUserSenator(this.userSenator2);
    }
    this.router.navigate(['senator']);
  }

  houseRepClick(houseRep: string) {
    sessionStorage.setItem('userHouseRep', this.userHouseRep);
    this._userService.setUserHouseRep(this.userHouseRep);
    this.router.navigate(['house-rep']);
  }
}
