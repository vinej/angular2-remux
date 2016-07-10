// App
export * from './components/app/app.component';
export * from './app.service';
export * from './app.routes';

import AuthActions from './actions/auth_actions'

import { MockAuthService, MockTodoService } from './services/mock_services'
import TodoService from './services/todo_service'
import AuthService from './services/auth_service'

// mock the services to do some tests
console.log('init mock')
AuthService.setInstance( new MockAuthService() )
TodoService.setInstance( new MockTodoService() )

import { AppState } from './app.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];

AuthActions.authCheckToken()
