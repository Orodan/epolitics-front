class authService {
  
  isAuthenticated = false;

  constructor ($http) {
    'ngInject';

    this.api = 'http://e-politics/api';
    this.$http = $http;
  }

  // Register a new user
  register (user) {
    return this.$http.post(this.api + '/chosens/create', user)
      .then((result) => {
        this.isAuthenticated = true;
      }, (err) => {
        return Promise.reject('An error occured');
      });
  }

  // Authenticate an user
  authenticate (user) {
    return this.$http.post(this.api + '/chosens/login', user)
      .then((result) => {
        this.isAuthenticated = true;
      }, (err) => {
        return Promise.reject('An error occured');
      });
  }

  // Logout an user
  logout () {}

}

export default authService;