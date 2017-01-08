class authService {
  idUser = null;
  isAuthenticated = false;

  constructor ($http) {
    'ngInject';

    this.authApi = 'http://e-politics.tk:8081';
    this.api = 'http://e-politics.tk:8081/api';
    this.$http = $http;
  }

  // Register a new user
  register (user) {
    return this.$http.post(this.authApi + '/chosens/create', user)
      .then((result) => {
        this.isAuthenticated = true;
      }, (err) => {
        console.error(err);
        return Promise.reject('An error occured');
      });
  }

  // Authenticate an user
  authenticate (user) {
    return this.$http.post(this.authApi + '/chosens/login', user)
      .then((result) => {
        this.isAuthenticated = true;
        console.log(result);
      }, (err) => {
        return Promise.reject('An error occured');
      });
  }

  // Logout an user
  logout () {}

}

export default authService;