import { dispatch } from '../resolvers/dispatcher'
import AuthService from '../services/auth_service';

export let authTypes = {
  authSetAuthorizations   : 'auth_SetAuthorizations',
  authSignIn              : 'auth_SignIn',
  authSignUp              : 'auth_SignUp',
  authSignOut             : 'auth_SignOut',
  authCheckToken          : 'auth_CheckToken',
  authError               : 'auth_Error'
}

const t = authTypes

// must use static method to pass them as callback
export default class AuthActions {
  public static authCheckToken() {
    dispatch( {
      type: t.authCheckToken
    })
  }

  public static authSetAuthorizations() {
    dispatch( {
      type: t.authSetAuthorizations,
      payload: function() {
        const service = AuthService.getInstance()
        service.setAuthorizations(AuthActions._authSetAuthorizations , AuthActions.authError)
      }
    })
  }

  // called from service
  public static _authSetAuthorizations(authorizations) {
    dispatch( {
      type: t.authSetAuthorizations,
      payload: authorizations
    })
  }

  public static authSignIn(email, password) {
    dispatch( {
      type: t.authSignIn,
      payload: function() {
        const service = AuthService.getInstance()
        service.signIn({ email, password }, AuthActions._authSignIn, AuthActions.authError)
      }
    })
  }

  // called from service
  public static _authSignIn(token, name) {
    console.log('next 2')
    dispatch( {
      type: t.authSignIn,
      payload: { token, name }
    })
  }

  public static authSignUp(email, password, name) {
    dispatch( {
      type: t.authSignUp,
      payload: function() {
        const service = AuthService.getInstance()
        service.signUp({ email, password, name }, AuthActions._authSignUp, AuthActions.authError)
      }
    })
  }

  // called from service
  public static _authSignUp(token, name) {
    dispatch( {
      type: t.authSignUp,
      payload: { token, name }
    })
  }

    // called from service
  public static authSignOut() {
    dispatch( {
      type: t.authSignOut
    })
  }

  public static authError(error) {
    dispatch( {
      type: t.authError,
      payload : error
    })
  }
}
