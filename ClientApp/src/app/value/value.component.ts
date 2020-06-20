import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

export class ValueComponent implements OnInit {
  //we can put whatever we want inside this property in Type Script
  values: any;

  constructor (private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  //whenever we have an Observable, we need to use a 'subscribe'
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    })
  }
}
