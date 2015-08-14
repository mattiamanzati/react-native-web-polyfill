var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');

class TextInput extends React.Component{
  onChange(e){
    if(this.props.onChangeText) this.props.onChangeText(e.target.value);
    if(this.props.onChange) this.props.onChange(e);
  }

  render(){
    var type = 'input';
    // copy over the same props to the new props for the input
    var {defaultValue, value, placeholder} = this.props;
    var props = {
      type: 'text',
      defaultValue,
      value,
      placeholder
    };
    // If multiline, convert to a textarea
    if(this.props.multiline) type = 'textarea';

    // if needs password-like, convert to password field.
    if(this.props.secureTextEntry){
      props.type = 'password';
      type = 'input';
    }

    // return the input
    return React.createElement(type, {
      ...props,
      className: 'text-input',
      onChange: (e) => this.onChange(e),
      style: browserifyStyle(this.props.style)
    }, null);
  }
}

module.exports = Radium(TextInput);
