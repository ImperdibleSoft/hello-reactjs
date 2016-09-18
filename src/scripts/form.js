window.Form = React.createClass({

  /* Initial State */
  getInitialState: function() {
    return {
      isSubmitting: false,
    };
  },


  /* Simulates a query to server */
  handleSubmit: function(values){
    /* Animates the button */
    this.setState({
      isSubmitting: true,
    });

    setTimeout(function() {
      this.setState({
        isSubmitting: false,
      });
    }, 3000);
  },

  render: function(){

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
          name="nickname"
          label="Nickname"
        />

        <CustomInput
          name="password"
          label="Password"
          type="password"
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
