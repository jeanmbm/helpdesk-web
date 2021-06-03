import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthGuardService} from '../guards/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthGuardService
  ) {}

  formLogin: FormGroup;

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formLogin.get(field).valid && this.formLogin.get(field).touched) ||
      (this.formLogin.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value);
    }
    this.formSubmitAttempt = true;
  }

}
