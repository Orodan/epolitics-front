class LoginController {

  constructor (authService) {
    'ngInject';
    
    this.authService = authService;
  }

  login (user) {
    this.authService.authenticate(user)
      .then(() => toastr.success('Welcome', 'Success'))
      .catch((err) => toastr.error(err, 'Error'));
  }

}

export default LoginController;
