import { observable, action, transaction } from 'mobx'
import AuthActions from '../actions/auth_actions'

export default class AuthStore {
  @observable email: string = ""
  @observable name: string  = ""
  @observable authenticated: boolean = false
  @observable errorMessage: string = ''

  isAutorizationInit: boolean = false
  //authorizations = []

  isActionAvailable(actiontype: string) : boolean {
    return true
    // if (actiontype.endsWith("_")) {
    //   actiontype = actiontype.substr(0, actiontype.length - 1);
    // }
    // return this.actions.indexOf(actiontype) > -1
  }

  getError() : string {
    return this.errorMessage
  }

  setAuthorizations(authorizations) {
    transaction( () => {
      this.isAutorizationInit = true
      //this.authorizations = authorizations
    })
  }

  checkToken() {
    const token = localStorage.getItem('remux-token')
    if (token != null && token != '') {
      const name = localStorage.getItem('remux-name')
      transaction( () => {
        this.authenticated = true
        this.name = name
        this.errorMessage = ''
        AuthActions.authSetAuthorizations()
      })
    }
  }

  signInOrUp(token: string, name: string) {
    console.log('signinup',token,name)
    localStorage.setItem('remux-token', token);
    localStorage.setItem('remux-name', name);
    transaction( () => {
      this.authenticated = true;
      this.name = name;
      this.errorMessage = '';
    });
    AuthActions.authSetAuthorizations()
  }

  signOut() {
    localStorage.removeItem('remux-token');
    localStorage.removeItem('remux-name');
    transaction(() => {
      this.authenticated = false;
      this.name = '';
      this.errorMessage = '';
    });
  }

  authError(error) {
    console.log(error)
  }
}
export let authStore = new AuthStore()