import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private _router : Router,
    private _userService : UserService
    ) {}
  ngOnInit(): void {
    this.validating = false;
  }

  validating: boolean = false;

  userControl = new FormControl('', Validators.required);
  accessForm = new FormGroup({
    user: this.userControl
  })

  onClick(): void {
    if (this.accessForm.valid) {
      this.validateLoading()
        .then(result => this._router.navigate([result]));
    }
  }

  validateLoading(): Promise<string> {
    this.validating = true;
    const ok = new Promise<string>((resolve) => {
      setTimeout(() => {
        this._userService.setLoggedUser(
          {
          name: this.userControl.value!
        })

        resolve('dashboard');
      }, 2000) // 2 seconds
    })

    return ok
  }
}


