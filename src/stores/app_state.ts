//import { observable } from 'mobx'

// global state
export let appState = {
  signInUp : {
    email : '',
    password : '',
    name : 'jyv',
    confirmPassword : '',
    error : ''
  },
  user : {
    name : '',
    authenticated : false,
    errorMessage : '',
    isAutorizationInit : false
    //authorizations = []
  },
  todos : {
    todos : [],
    desc : '',
    count : 3
  }
}
