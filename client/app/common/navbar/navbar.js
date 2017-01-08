import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import authService from '../services/auth.service';

let navbarModule = angular.module('navbar', [
  uiRouter
])

.component('navbar', navbarComponent)

.service('authService', authService)
  
.name;

export default navbarModule;
