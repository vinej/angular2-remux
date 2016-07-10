import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './components/home';
import { SignIn } from './components/signin';
import { SignUp } from './components/signup';
import { SignOut } from './components/signout';
import { Todos } from './components/todos';
import { NoContent } from './components/no-content';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  { path: '',          component: Home },
  { path: 'home',      component: Home },
  { path: 'todos',     component: Todos },
  { path: 'signin',    component: SignIn },
  { path: 'signup',    component: SignUp },
  { path: 'signout',   component: SignOut },
  { path: '**',        component: NoContent }
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'Home': require('es6-promise-loader!./components/home'),
  'Todos': require('es6-promise-loader!./components/todos'),
  'SignIn': require('es6-promise-loader!./components/signin'),
  'SignUp': require('es6-promise-loader!./components/signup'),
  'SignOut': require('es6-promise-loader!./components/signout'),
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['Home'],
  asyncRoutes['Todos'],
  asyncRoutes['SignIn'],
  asyncRoutes['SignUp'],
  asyncRoutes['SignOut']
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
