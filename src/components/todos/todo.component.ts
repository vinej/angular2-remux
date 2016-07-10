import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import TodoActions from '../../actions/todo_actions';

@Component({
  selector: 'todo',  // <home></home>
  templateUrl: './todo.template.html',
  inputs: [ 'todo' ],
  styleUrls: ['./todo.style.css']
})
export class Todo {
  todo : any   // parameters
  store = null
  on = null

  constructor(public appState: AppState) {
    this.store = appState.state.todos
    this.on = TodoActions
  }

  ngOnInit() {
    console.log('hello `Todo` component');
  }
}
