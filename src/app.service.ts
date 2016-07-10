import { Injectable } from '@angular/core';
import { HmrState } from 'angular2-hmr';
import { appState} from './stores/app_state';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export interface User {
    name : string,
    authenticated : boolean,
    errorMessage : string,
    isAutorizationInit : boolean
}

@Injectable()
export class AppState {
  // @HmrState() is used by HMR to track the state of any object during HMR (hot module replacement)
  @HmrState() _state = appState;

  constructor() {
    console.log('user')
  }

  // already return a clone of the current state
  get state() {
    return this._state;
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get user$() {
    return this._user$
  }
}
