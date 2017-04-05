import { Component } from '@angular/core';

export class Hero {
id: number;
name: string;
}



@Component({
  selector: 'my-app',
  template: `
    <h1> {{title}}</h1>
    <h2> {{hero.name}} détails!</h2>
    <div> <label>id:</label>{{hero.id}} </div>
    <div> <label>name:</label>{{hero.name}} </div>
    <div>
      <label>name:</label>
      <input [(ngModel)]="hero.name" placeholder="name" >
      </div>
    `
})

export class AppComponent  { name = 'Angular';
title='Tour of Heroes';
Hero='Windstorm';
hero: Hero = {
id: 1,
name:'Windstorm'
};
}
