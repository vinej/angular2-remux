//import axios from '../../node_modules/axios'
import { ROOT_URL, HEADERS, PARAMETERS } from './config_service'

export default class AuthService {
  static instanceService : any

  constructor() {
    AuthService.instanceService = null
  }

  static setInstance(instanceService : any) {
    AuthService.instanceService = instanceService
  }

  static getInstance() : any {
    if (!AuthService.instanceService) {
      AuthService.instanceService = new AuthService()
    }
    return AuthService.instanceService
  }

  // signIn({ email , password  }, next: any, err: any) {
  //   axios.post(`${ROOT_URL}/auth/signin?${PARAMETERS()}`, { email : String, password: String })
  //   .then(response => {
  //     console.log(response.data.token)
  //     next(response.data.token, response.data.name); 
  //   })
  //   .catch(response => {
  //     err(response.data)
  //   });
  // }

  // signUp({ email, password, name }, next, err) {
  //   axios.post(`${ROOT_URL}/auth/signup?${PARAMETERS()}`, { email : String, password : String, name: String })
  //   .then(response => {
  //     console.log(response.data.token)
  //     next(response.data.token, name); 
  //   })
  //   .catch(response => err(response.data));
  // }

  // setAuthorizations(next, err) {
  //   axios.get(`${ROOT_URL}/api/actions?${PARAMETERS()}`, HEADERS())
  //   .then(response => {
  //     next(response.data)
  //   })
  //   .catch(response => {
  //     err(response.data)
  //   })
  // }
}


