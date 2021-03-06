import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import TodoActions from '../../actions/todo_actions';
import { Todo } from './todo.component';

@Component({
  selector: 'todos',  // <home></home>
  templateUrl: './todos.template.html',
  directives: [ Todo ]
})
export class Todos {
  store = null
  on = null

  constructor(public appState: AppState) {
    this.store = appState.state.todos
    this.on = TodoActions
  }

  ngOnInit() {
    TodoActions.todoGetAll()
    console.log('hello `Todos` component');
  }
}
