window.FormError = React.createClass({

  /* Render the component */
  render: function(){

    /* If there is no error, render nothing */
    if (!this.props.message) {
      return <div></div>;
    }

    return (
      <div className="FormError">
        { this.props.message }
      </div>
    );
  }
});

module.exports = FormError;
