import { observable } from 'mobx'
import TodoActions from '../actions/todo_actions'

export default class TodoStore {
  @observable _todos : any[]
  @observable _desc : string
  on : any
  _count: number

  constructor() {
    this.on = TodoActions
    this._count = 3
    this.desc = ''
  }

  set desc(desc : string) {
    this._desc = desc
  }

  get desc() : string {
    return this._desc
  }

  get todos() : any[] {
    return this._todos
  }

  setAll(todos) {
    this._todos = todos
  }

  setDesc(desc) {
    this._desc = desc
  }

  setDone( {todo, done }) {
    todo.done = done
  }

  delete(id) {
    const idx = this.todos.findIndex( (r) => r.id === id );
    this.todos.splice(idx,1);
  }

  add() {
    if (this._desc === '') return
    this.todos.push( { id: this._count, desc: this.desc, done: false} );
    this._count = this._count + 1
    this._desc = ''
  }
}
export let todoStore = new TodoStore()