import { Component, Input } from '@angular/core';

import {Joke} from './domain/joke';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
    <h4 class="card-title">
      {{data.setup}}
      <span class="card-text" [hidden]="data.hide" style="font-size:12pt;">
        {{data.punchline}}
      </span>
    </h4>
    
    <a class="btn btn-warning"
      (click)="data.toggle()">Tell Me</a>
  </div>
  `,
})
export class JokeComponent {
  @Input('joke') data: Joke;
}