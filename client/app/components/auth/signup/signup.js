import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signupComponent from './signup.component';
// import * as toastr from 'angular-toastr';

let signupModule = angular.module('signup', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('signup', {
      url: '/signup',
      component: 'signup'
    });
})

.component('signup', signupComponent)

.name;

export default signupModule;
