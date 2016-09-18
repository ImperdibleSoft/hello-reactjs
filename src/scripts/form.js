window.Form = React.createClass({

  /* Initial State */
  getInitialState: function() {
    return {
      isSubmitting: false,
    };
  },

  /* Simulates a query to server */
  handleSubmit: function(e){
    e.preventDefault();

    /* Restart custom validations */
    var errors = {};
    this.state = {};

    var _this = this;
    var _nickname = document.querySelector('#nickname').value;
    var _password = document.querySelector('#password').value;

    /* Required validations */
    if (_nickname.length <= 0) {
      errors.nickname = true;
      this.setState({
        'nickname': {
          'error': 'Please, enter your nickname',
        },
      });
    }
    if (_password.length <= 0) {
      errors.password = true;
      this.setState({
        'password': {
          'error': 'Please, enter your password',
        },
      });
    }

    /* If no validation failures */
    if (!errors.nickname && !errors.password) {

      /* Start submission */
      this.setState({
        'isSubmitting': true,
      });

      /* Emulate an AJAX call */
      setTimeout(function() {
        /* AJAX call is completed */
        _this.setState({
          'isSubmitting': false,
        });

        /* Emulate basic auth success */
        if (_nickname === 'hello' && _password === 'reactjs') {
          alert('Success');

        /* On error */
        } else {
          _this.setState({
            error: 'Login failed',
          });
        }
      }, 2000);
    }
  },

  /* Render the component */
  render: function(){

    var nicknameData = {
      id: 'nickname',
      name: 'nickname',
      label: 'Nickname',
    };
    var passwordData = {
      id: 'password',
      name: 'password',
      label: 'Password',
    };

    /* Render form */
    return (
      <form
        className="Form Form--login"
        name="loginForm"
        onSubmit={ this.handleSubmit }
      >

        <FormError
          message={ this.state.error }
        />

        <CustomInput
          data={ nicknameData }
          field={ this.state.nickname }
        />

        <CustomInput
          type="password"
          data={ passwordData }
          field={ this.state.password }
        />

        <CustomButton
          type="submit"
          label="Log in"
          isSubmitting={ this.state.isSubmitting }
        />
      </form>
    );
  }
});

module.exports = Form;
