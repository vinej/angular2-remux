import { Component } from '@angular/core';
import { AppState } from '../app.service';
import AuthActions from '../../actions/auth_actions'

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'signin',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  //styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './signin.template.html'
})

export class SignIn {
  email = ''
  password = ''
  
  onSubmit($event) {
      AuthActions.authSignIn(this.email, this.password)
  }
  
  // TypeScript public modifiers
  constructor(public appState: AppState) {
    console.log(appState)
  }

  ngOnInit() {
    console.log('hello `SignIn` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
