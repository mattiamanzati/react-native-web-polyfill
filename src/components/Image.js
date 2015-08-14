var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');

class Image extends React.Component{
  render(){
    var resizeMode = typeof this.props.resizeMode === 'undefined' ?
      'cover' : this.props.resizeMode;

    var backgroundImage = typeof this.props.source === 'undefined' ?
      'none' : 'url(' + this.props.source.uri + ')';

    var style = {
      resizeMode,
      backgroundImage
    };

    // TODO: handle onLoad and onError events

    return <div className="image" style={browserifyStyle(style, this.props.style)}>
      {this.props.children}
    </div>;
  }
}

Image = Radium(Image);

Image.resizeMode = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'stretch'
};

module.exports = Image;
