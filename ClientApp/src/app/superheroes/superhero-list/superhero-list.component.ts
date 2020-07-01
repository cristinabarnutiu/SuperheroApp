import { Component, OnInit } from '@angular/core';
import { Superhero } from '../../_models/superhero';
import { SuperheroService } from '../../_services/superhero.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {

  superheroes: Superhero[];

  constructor(private superheroService:SuperheroService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.loadSuperheroes();
    this.route.data.subscribe(data => {
      this.superheroes = data['superheroes'];
    });
  }

  //loadSuperheroes() {
  //  this.superheroService.getSuperheroes().subscribe((superheroes: Superhero[]) => {
  //    this.superheroes = superheroes;
  //  }, error => {
  //      this.alertify.error(error);
  //      //this.alertify.error(error.toString());
  //  });
  //}

}
