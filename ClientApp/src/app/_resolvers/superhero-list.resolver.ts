import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SuperheroService } from '../_services/superhero.service';
import { Superhero } from '../_models/superhero';

@Injectable()
export class SuperheroListResolver implements Resolve<Superhero[]> {
  constructor(
    private superheroService: SuperheroService,
    private router: Router,
    private alertify: AlertifyService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Superhero[]> {
    return this.superheroService.getSuperheroes().pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
