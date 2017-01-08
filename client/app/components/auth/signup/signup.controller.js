class SignupController {

  constructor(authService) {
    'ngInject';

    this.authService = authService;
  }

  signup (user) {
    this.authService.register(user)
      .then(() => toastr.success('You have been registred', 'Success'))
      .catch((err) => toastr.error(err, 'Error'));
  }
}

export default SignupController;
