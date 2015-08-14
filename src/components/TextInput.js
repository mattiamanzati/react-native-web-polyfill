var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');

class TextInput extends React.Component{
    render(){
      var type = React.DOM.input;
      // copy over the same props to the new props for the input
      var {defaultValue, value, placeholder} = this.props;
      var props = {
        type: 'text',
        defaultValue,
        value,
        placeholder
      };
      // If multiline, convert to a textarea
      if(this.props.multiline) type = React.DOM.textarea;

      // if needs password-like, convert to password field.
      if(this.props.secureTextEntry){
        props.type = 'password';
        type = React.DOM.input;
      }

      // return the input
      return <type className="text-input" {...props} style={browserifyStyle(this.props.style)} />;
    }
}

module.exports = Radium(TextInput);
