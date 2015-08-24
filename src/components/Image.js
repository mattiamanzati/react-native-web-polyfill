var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class Image extends React.Component{
  render(){
    var backgroundSize = typeof this.props.resizeMode === 'undefined' ?
      'cover' : this.props.resizeMode;

    var backgroundImage = typeof this.props.source === 'undefined' ?
      'none' : 'url(' + this.props.source.uri + ')';

    var style = {
      backgroundSize,
      backgroundImage
    };

    // TODO: handle onLoad and onError events

    return <div className="image" style={browserifyStyle(style, this.props.style)}>
      {this.props.children}
    </div>;
  }
}

Image.resizeMode = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'stretch'
};

module.exports = fixOldFlexbox(Radium(Image));
