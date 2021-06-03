import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserDto} from '../../model/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private logedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.logedIn.asObservable();
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  login(user: UserDto) {
    if (user.userName !== '' && user.password !== '') {
      this.logedIn.next(true);
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.logedIn.next(false);
    this.router.navigate(['/login']);
  }

}
