import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import AuthActions from '../../actions/auth_actions'

@Component({
  selector: 'signin',  // <home></home>
  templateUrl: './signin.template.html'
})
export class SignIn {
  email = ''
  password = ''
  
  onSubmit($event) {
    console.log('signin', this.email, this.password)
    AuthActions.authSignIn(this.email, this.password)
  }
  
  // TypeScript public modifiers
  constructor(public appState: AppState) {
    console.log('constructor signin :')
  }

  ngOnInit() {
    console.log('hello `SignIn` component :');
  }
}
