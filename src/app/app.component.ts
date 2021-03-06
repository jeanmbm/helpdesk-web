import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthGuardService} from './guards/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'helpdesk-web';

  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthGuardService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(): void {
    this.authService.logout();
  }
}
