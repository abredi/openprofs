import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    localStorage.setItem('logged_in', 'true');
    this.router.navigate(['/']);
  }

}
