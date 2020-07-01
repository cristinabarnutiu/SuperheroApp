import { Component, OnInit, Input } from '@angular/core';
import { Superhero } from '../../_models/superhero';

@Component({
  selector: 'app-superhero-card',
  templateUrl: './superhero-card.component.html',
  styleUrls: ['./superhero-card.component.css']
})
export class SuperheroCardComponent implements OnInit {

  //child component of list component
  @Input() superhero: Superhero;

  constructor() { }

  ngOnInit() {
  }

}
