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
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about', component: 'About',
    resolve: {
      'yourData': DataResolver
  }},
  { path: 'signin', component: 'SignIn',
    resolve: {
      'yourData': DataResolver
  }},
  { path: '**',    component: NoContent },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'SignIn': require('es6-promise-loader!./components/signin'),
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
