import angular from 'angular';
import Home from './home/home';
import Login from './auth/login/login';
import Signup from './auth/signup/signup';

let componentModule = angular.module('app.components', [
  Home,
  Login,
  Signup
])

.name;

export default componentModule;
