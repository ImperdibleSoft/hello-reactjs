window.CustomInput = React.createClass({
  render: function(){

    return(
      <div className="CustomInput">
        <FormError
          message={ this.props.error }
        />

        <input
          className="CustomInput-input"
          type={ this.props.type || 'text' }
          name={ this.props.name }
          placeholder={ this.props.label }
        />
      </div>
    );
  }
});

module.exports = CustomInput;
