import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import User from '../../models/user.class';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  userData: User = new User('');

  constructor(private _userService : UserService) {}
  ngOnInit(): void {
    
    this._userService.getLoggedUser().subscribe(x => this.userData.name = x.name);
  }
}
