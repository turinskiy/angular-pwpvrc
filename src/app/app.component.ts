import { Component } from '@angular/core';

import {Joke} from './domain/joke';

@Component({
  selector: 'app',
  template: `
  <joke-list>
    <joke [joke]="joke"></joke>
  </joke-list>
  `
})
export class AppComponent {
  joke: Joke = new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
}