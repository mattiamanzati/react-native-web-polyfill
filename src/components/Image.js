var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class Image extends React.Component{
  render(){
    var {resizeMode, backgroundImage, source: {uri}, ...props} = this.props;

    var backgroundSize = typeof resizeMode === 'undefined' ? 'cover' : resizeMode;
    var backgroundImage = typeof uri === 'undefined' ? 'none' : 'url(' + uri + ')';

    var style = {
      backgroundSize,
      backgroundImage
    };

    // TODO: handle onLoad and onError events
    // TODO: handle tintColor via canvas image manipulation

    return <div className="image" style={browserifyStyle(style, props.style)}>
      {props.children}
    </div>;
  }
}

Image = fixOldFlexbox(Radium(Image));

Image.resizeMode = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'stretch'
};

module.exports = Image;
