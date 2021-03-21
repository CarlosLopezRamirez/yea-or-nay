import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: []
})
export class MainPageComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    console.log(this._userService.getData());
  }
}
