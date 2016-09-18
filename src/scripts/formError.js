window.FormError = React.createClass({

  /* Render the component */
  render: function(){

    /* If there is no error, render nothing */
    if (!this.props.message) {
      return;
    }

    return (
      <div className="FormError">
        <span className="FormError-message">
          { this.props.message }
        </span>
      </div>
    );
  }
});

module.exports = FormError;
