import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  //this will store out username and password
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('You have successfully logged in'); },
      error => { this.alertify.error(error); },
      () => { this.router.navigate(['/superhero-list']);}
    );
  }

  //a method to determine whether the user is logged in
  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('You have successfully logged out');
    this.router.navigate(['/home']);
  }

  //from the framework
  isexpanded = false;
  collapse() {   this.isexpanded = false;  }
  toggle() {   this.isexpanded = !this.isexpanded; }
}
