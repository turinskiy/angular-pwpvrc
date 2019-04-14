import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Joke } from './domain/joke';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
    <h4 class="card-title">
      {{data.setup}}
      <span class="card-text" [hidden]="data.hide" style="font-size:12pt;">
        <ng-content></ng-content>
      </span>
    </h4>
    <div class="container" style="border:1px solid black;">
      <div class="row">
        <div class="col-md-7" style="border:1px solid black;">
          <a class="btn btn-warning"
            (click)="data.toggle()">Tell Me</a>
        </div>
        <div class="col-md-5" style="border:1px solid black; text-align: right;">
          <a class="btn btn-danger" (click)="removeJoke()">Remove</a>
        </div>
      </div>
    </div>
  </div>
  `,
})
export class JokeComponent {
  @Input('joke') data: Joke;

  @Output() jokeRemoved = new EventEmitter<Joke>();

  removeJoke() {
    this.jokeRemoved.emit(new Joke(this.data.setup, this.data.punchline));
  }
}