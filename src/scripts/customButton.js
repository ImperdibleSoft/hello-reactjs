window.CustomButton = React.createClass({

  /* Render the component */
  render: function(){

    return(
      <button
        className="CustomButton"
        type={ this.props.type || 'button' }
        disabled={ this.props.isSubmitting }
      >
        { this.props.label }
      </button>
    )
  }
});

module.exports = CustomButton;
