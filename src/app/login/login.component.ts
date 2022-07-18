import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Reactive Form
  loginForm;
  isError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      loginId: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  ngOnInit(): void {
    //when navigates to Login Component
    this.authService.setLoggedInToFalse();
  }

  get loginId() {
    return this.loginForm.get('loginId');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onReset() {
    this.loginId?.reset('');
    this.password?.reset('');
    this.isError = false;
  }

  onSubmit() {
    if (this.loginId?.value && this.password?.value) {
      this.authService
        .isValidUser(this.loginId.value, this.password.value)
        .subscribe((data) => {
          if (data) {
            this.router.navigate(['home']);
          } else {
            this.router.navigate(['/']);
            this.isError = true;
          }
        });
    }
  }
}
