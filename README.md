# angular2-Remux

Welcome to angular2-remuxx

The boilerplate give you a minimum example to use the Remux flux pattern with angular2
* ReMux stand for : **Re**act **M**obx Fl**ux** pattern and it's inspired by Redux.

**The implementation with angular2 does not need the library Mobx**, because the default change detection pattern of angular2 works with mutable data. For this reason, the example with angular2 it's only an attempt to use the same pattern of React with angular2 to see the differences between both.

With 'ReMux' you have a very simple way to implement the following pattern
* component => action => resolver => store => component
 * The application state is shared by all stores
 * each store uses (manages) a portion of the application store
 * components receive a store as props (state of the component, like mapStateToProps with Redux)
 * components use the store in read only mode
  *  the exception could be internal states that are not needed by all others components (form input)
 * components call actions creators to apply modifications to the store (a portion of the the application state)
 * actions creators dispatch informations to resolvers
 * resolvers resolve actions and call stores
 * stores update a portion of the application state
 * angular2 refresh the components when the stores are updated
 * resolvers could be also middlewares to do something with the action before/after calling the stores
* TRY IT, IT'S VERY SIMPLE THIS WAY

In the example, the services are Mocked : to test with real services use the REST services of this backend : https://github.com/vinej/react-portal-server

For a more complete example see: https://github.com/vinej/react-portal

  * npm install
  * npm start

JYV