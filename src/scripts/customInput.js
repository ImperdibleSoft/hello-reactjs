window.CustomInput = React.createClass({
  render: function(){
    return(
      <div className="CustomInput">
        <FormError
          message={ this.props.field && this.props.field.error }
        />

        <input
          className="CustomInput-input"
          type={ this.props.type || 'text' }
          id={ this.props.data && this.props.data.id }
          name={ this.props.data && this.props.data.name }
          placeholder={ this.props.data && this.props.data.label }
        />
      </div>
    );
  }
});

module.exports = CustomInput;
