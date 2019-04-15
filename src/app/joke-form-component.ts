import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { Joke } from './domain/joke';

@Component({
  selector: 'joke-form',
  templateUrl: 'joke-form-component.html',
  styleUrls: [
    'joke-form-component.css'
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}