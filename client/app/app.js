import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

import authService from './common/services/auth.service';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run(($state, $transitions, authService) => {
    "ngInject";

    $transitions.onStart({ to:'*' }, (trans) => {
      if (trans.to().name === 'login'
          || trans.to().name === 'signup') return;
      if (!authService.isAuthenticated) $state.go('login');
    });
  })

  .component('app', AppComponent);
