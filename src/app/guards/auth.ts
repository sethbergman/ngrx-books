import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GoogleBooksService } from '../services/google-books';
import * as fromRoot from '../reducers';
import * as book from '../actions/book'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    if (this.auth.authenticated) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
