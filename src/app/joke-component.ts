import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Joke } from './domain/joke';

@Component({
  selector: 'joke',
  templateUrl: `joke-component.html`,
})
export class JokeComponent {
  @Input('joke') data: Joke;

  @Output() jokeRemoved = new EventEmitter<Joke>();

  removeJoke() {
    this.jokeRemoved.emit(new Joke(this.data.setup, this.data.punchline));
  }
}