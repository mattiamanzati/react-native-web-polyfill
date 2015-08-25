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
    var classNames = ['text'];

    if(this.props.suppressHighlighting) classNames.push('suppress-highlighting');

    return <span onClick={(e) => this.onClick(e)} className={classNames.join(' ')} style={browserifyStyle(this.props.style)}>
      {this.props.children}
    </span>;
  }
}

module.exports = fixOldFlexbox(Radium(Text));
