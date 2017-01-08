class authService {
  
  isAuthenticated = false;

  constructor ($http) {
    'ngInject';

    this.api = 'http://e-politics/api';
    this.$http = $http;
  }

  // Register a new user
  register (user) {
    return this.$http.post(this.api + '/chosens/create')
      .then(() => {
        this.isAuthenticated = true;
        return Promise.resolve('success');
      }, () => {
        return Promise.reject('error');
      });
  }

  // Authenticate an user
  authenticate () {}

  // Logout an user
  logout () {}

}

export default authService;