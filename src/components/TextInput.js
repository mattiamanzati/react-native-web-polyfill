var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class TextInput extends React.Component{
  // onChange and onChangeText support
  onChange(e){
    if(this.props.onChangeText) this.props.onChangeText(e.target.value);
    if(this.props.onChange) this.props.onChange(e);
  }

  // onFocus support
  onFocus(e){
    if(this.props.onFocus) this.props.onFocus(e);
  }

  // onBlur support
  onBlur(e){
    if(this.props.onBlur) this.props.onBlur(e);
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
      onFocus: (e) => this.onFocus(e),
      onBlur: (e) => this.onBlur(e),
      style: browserifyStyle(this.props.style)
    }, null);
  }
}

module.exports = fixOldFlexbox(Radium(TextInput));
