import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-senator',
  templateUrl: './senator.component.html',
  styleUrls: ['./senator.component.scss']
})
export class SenatorComponent implements OnInit {

  userName!: string;
  userSenator!: string;

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const data = sessionStorage.getItem('userData');
    this._userService.setData(JSON.parse(data!));
    this.userName = sessionStorage.getItem('userName')!;
    this._userService.setUserName(this.userName);
    this.userSenator = sessionStorage.getItem('userSenator')!;
  }

}
