import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private superheroService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.loadSuperhero();
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

    //this.route.queryParams.subscribe(params => {
    //  const selectedTab = params['tab'];
    //  this.superheroTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
    //});



  //loadSuperhero() {
  //  this.superheroService.getSuperhero(+this.route.snapshot.params['id'])
  //    .subscribe((superhero: Superhero) => {
  //      this.superhero = superhero;
  //    }, error => {
  //        this.alertify.error(error);
  //    });
  //}


}
