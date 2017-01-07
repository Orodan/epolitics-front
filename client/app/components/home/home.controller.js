class HomeController {

  constructor($scope, authService) {
    'ngInject';

    this.$scope = $scope;
    this.authService = authService;

    this.isAuthenticated = false;
  }

  $onInit () {
  }

}

export default HomeController;
