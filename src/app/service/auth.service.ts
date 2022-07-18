import { Injectable } from '@angular/core';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  private isloggedIn: boolean = false;
  private loginId: string = 'Admin';
  private password: string = 'Password';

  constructor() {
    this.isloggedIn = false;
  }

  setLoggedInToFalse() {
    this.isloggedIn = false;
  }

  isValidUser(loginId: string, password: string) {
    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.
    if (this.loginId === loginId && this.password === password) {
      this.isloggedIn = true;
    }
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
