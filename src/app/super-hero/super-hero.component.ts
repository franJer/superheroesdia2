import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {

  @Input() superheroe: SuperHero;
  @Output() send = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    this.send.emit(this.superheroe.name);
  }

}
export class SuperHero {
  name: string;
  alterEgo: string;
  superpowers: String[];
}
