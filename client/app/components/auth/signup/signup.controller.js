class SignupController {

  constructor(authService) {
    'ngInject';

    this.authService = authService;
  }

  signup (user) {
    this.authService.register(user)
      .then((result) => {
        toastr.success('You have been registred', 'Success');
        console.log(result);
      })
      .catch((err) => {
        toastr.error('An error occured', 'Error');
      });
  }
}

export default SignupController;
