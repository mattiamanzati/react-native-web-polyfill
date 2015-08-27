var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class Text extends React.Component{
  // onPress support
  onClick(e){
    if(this.props.onPress) this.props.onPress(e);
  }

  render(){
    // create the classNames
    var classNames = ['text'];

    // deconstruct needed elements
    var {suppressHighlighting} = this.props;

    // handle suppress-highlighting if needed
    if(suppressHighlighting) classNames.push('suppress-highlighting');

    return <span className={classNames.join(' ')} onClick={(e) => this.onClick(e)} style={browserifyStyle(this.props.style)}>
      {this.props.children}
    </span>;
  }
}

module.exports = fixOldFlexbox(Radium(Text));
