import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

export let browserRefresh = false;

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

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const data = sessionStorage.getItem('userData');
    console.log(data);
    this._userService.setData(JSON.parse(data!));
    this.userName = sessionStorage.getItem('userName')!;
    this._userService.setUserName(this.userName);

    this.userHouseRep = this._userService.getData()["results"]
    [0]["fields"]["congressional_districts"][0]
    ["current_legislators"][0]["bio"]["first_name"] + " " +
    this._userService.getData()["results"]
    [0]["fields"]["congressional_districts"][0]
    ["current_legislators"][0]["bio"]["last_name"];

    this.userDistrict = this._userService.getData()["results"]
    [0]["fields"]["congressional_districts"]
    [0]["name"];

    this.userSenator1 = this._userService.getData()["results"]
    [0]["fields"]["congressional_districts"][0]
    ["current_legislators"][1]["bio"]["first_name"] + " " +
    this._userService.getData()["results"]
    [0]["fields"]["congressional_districts"][0]
    ["current_legislators"][1]["bio"]["last_name"];

    this.userSenator2 = this._userService.getData()["results"]
    [0]["fields"]["congressional_districts"][0]
    ["current_legislators"][2]["bio"]["first_name"] + " " +
    this._userService.getData()["results"]
    [0]["fields"]["congressional_districts"][0]
    ["current_legislators"][2]["bio"]["last_name"];

    this.userName = this._userService.getUserName();
  }
}
