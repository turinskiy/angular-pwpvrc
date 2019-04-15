import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Joke } from './domain/joke';
import { JokeComponent } from './joke-component';

@Component({
  selector: 'joke-list',
  templateUrl: `joke-list-component.html`})
export class JokeListComponent implements AfterViewInit {
  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror?",
      "Hello-Me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse?",
      "Mask-a-pony (Mascarpone)"),
    /*new Joke("A kid threw a lump of cheddar at me",
      "I thought ‘That’s not very mature’"),*/
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
  }

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  removeJoke(joke) {
    this.jokes = this.jokes.filter(item => item.setup !== joke.setup);
  }
}