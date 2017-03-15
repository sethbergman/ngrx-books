import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'bs-login',
  templateUrl: './auth.ts'
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.auth.authenticated) {
      this.router.navigate(['/#/book/find']);
    }
  }

}
