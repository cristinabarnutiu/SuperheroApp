import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  //this will store out username and password
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => { console.log('Logged in successfully'); },
      error => { console.log('Failed to login'); }
    );
  }

  //a method to determine whether the user is logged in
  loggedIn() {
    const token = localStorage.getItem('token');
    //if there is something in this token, return true
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }


  //from the framework
  isexpanded = false;
  collapse() {   this.isexpanded = false;  }
  toggle() {   this.isexpanded = !this.isexpanded; }
}
