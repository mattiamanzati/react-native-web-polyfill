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
  
  componentDidMount(){
    // if wanted, do autofocus
    if(this.props.autoFocus) React.findDOMNode(this.refs.main).focus();
  }

  render(){
    // by default, use a input[text]
    var tagName = 'input';
    var type = 'text';

    // copy over the same props to the new props for the input
    var {defaultValue, value, placeholder, multiline, secureTextEntry, textAlign, style, ...props} = this.props;

    // init the classNames
    var classNames = ['text-input'];

    // handle the textAlign
    if(textAlign) classNames.push('text-align-' + textAlign);

    // If multiline, convert to a textarea
    if(multiline) tagName = 'textarea';

    // if needs password-like, convert to password field.
    if(secureTextEntry){
      type = 'password';
      tagName = 'input'; // TODO: multiline password-protected inputs?
    }

    // return the input
    return React.createElement(tagName, {
      ref: 'main',
      className: classNames.join(' '),

      value,
      defaultValue,
      placeholder,
      style: browserifyStyle(style),

      onChange: (e) => this.onChange(e),
      onFocus: (e) => this.onFocus(e),
      onBlur: (e) => this.onBlur(e)
    }, null);
  }
}

module.exports = fixOldFlexbox(Radium(TextInput));
