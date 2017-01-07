import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import authService from '../../common/services/auth.service';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.service('authService', authService)
  
.name;

export default homeModule;
