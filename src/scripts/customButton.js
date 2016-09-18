window.CustomButton = React.createClass({

  /* Render the component */
  render: function(){

    return(
      <button
        className="Button"
        type={ this.props.type || 'button' }
      >
        { this.props.label }
      </button>
    )
  }
});

module.exports = CustomButton;
