import { Component } from '@angular/core';
import { AppState, User } from '../../app.service';

@Component({
  selector: 'header',
  template: `
    <div class="pure-g header">
      <div class="pure-u-1-4">
        <div>ReMux</div>
      </div>
      <div class="pure-u-3-4" >
          <span><a [routerLink]=" ['./home'] ">Home</a></span>
          <span><a *ngIf="store.authenticated === true" [routerLink]=" ['./todos'] ">Todos</a></span>
          <span><a *ngIf="!store.authenticated" [routerLink]=" ['./signin'] ">SignIn</a></span>
          <span><a *ngIf="!store.authenticated" [routerLink]=" ['./signup'] ">SignUp</a></span>
          <span><a *ngIf="store.authenticated === true" [routerLink]=" ['./signout'] ">SignOut</a></span>
      </div>
    </div>
  `
})
export class Header {
  //authenticated = false
  store = null

  constructor(public appState: AppState) {
    this.store = appState.state.user
  }

  ngOnInit() {
    console.log('Hello Header');
  }
}