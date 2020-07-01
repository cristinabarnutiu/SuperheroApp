import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Superhero } from '../_models/superhero';

//const httpOptions = { headers: new HttpHeaders({  'Authorization': 'Bearer ' + localStorage.getItem('token') })};

@Injectable({
  providedIn: 'root'
})

export class SuperheroService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.baseUrl + 'superheroes')
  }

  getSuperhero(id): Observable<Superhero> {
    return this.http.get<Superhero>(this.baseUrl + 'superheroes/' + id)
  }
}
