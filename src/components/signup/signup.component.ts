import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import AuthActions from '../../actions/auth_actions'

@Component({
  selector: 'signup',  // <home></home>
  templateUrl: './signup.template.html'
})

export class SignUp {
  email = ''
  password = ''
  confirmPassword = ''
  name = ''

  onSubmit($event) {
      AuthActions.authSignUp(this.email, this.password, this.name)
  }
  
  // TypeScript public modifiers
  constructor(public appState: AppState) {
    //console.log(appState)
  }

  ngOnInit() {
    console.log('hello `SignUp` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
