import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import AuthActions from '../../actions/auth_actions'

@Component({
  selector: 'signout',  // <home></home>
  templateUrl: './signout.template.html'
}) 

export class SignOut {
  // TypeScript public modifiers
  constructor(public appState: AppState) {
    //console.log(appState)
  }

  ngOnInit() {
    AuthActions.authSignOut()
    console.log('hello `SignOut` component');
  }
}
