import {Component, EventEmitter, Output} from '@angular/core';

import {Joke} from './domain/joke';

@Component({
  selector: 'joke-form',
  template: `
  <div class="card card-block">
    <h4 class="card-title">Create Joke</h4>
    <div class="form-group">
      <input type="text" class="form-control" 
        placeholder="Enter the setup">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" 
        placeholder="Enter the punchline">
    </div>
    <button type="button" 
      class="btn btn-primary"
      (click)="createJoke()">Create</button>
  </div>
  `
})
export class JokeFormComponent{
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke() {
    this.jokeCreated.emit(new Joke('A setup', 'A punchline'));
  }
}