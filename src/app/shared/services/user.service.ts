import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import User from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userInformation$ = new BehaviorSubject<User>({name: ''});

  getLoggedUser(): Observable<User> {
    return this.userInformation$.asObservable();
  }

  setLoggedUser(user : User): void {
    console.log('setting user');
    console.log(user);
    this.userInformation$.next(user);
  }
}