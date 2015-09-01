var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');
var Hammer = require('hammerjs');

class Text extends React.Component{
  // onPress support
  onClick(e){
    if(this.props.onPress) this.props.onPress(e);
  }
  
  // bind event handlers
  componentDidMount(){
    // create hammer instance
    if(!this.hammer){
      this.hammer = new Hammer(React.findDOMNode(this.refs.main));
      this.hammer.get('press').set({time: 80}); // just to avoid immediatly trigger the press
    }
    // binds events
    this.hammer.on('press', this.onClick.bind(this));
  }
  
  componentDidUnmount(){
    // if no hammer instance exists, return
    if(!this.hammer) return;
    // unbind hammer events
    this.hammer.off('press', this.onClick.bind(this));
    this.hammer.destroy();
  }

  render(){
    // create the classNames
    var classNames = ['text'];

    // deconstruct needed elements
    var {suppressHighlighting} = this.props;

    // handle suppress-highlighting if needed
    if(suppressHighlighting) classNames.push('suppress-highlighting');

    return <span ref='main' className={classNames.join(' ')} onClick={(e) => this.onClick(e)} style={browserifyStyle(this.props.style)}>
      {this.props.children}
    </span>;
  }
}

module.exports = fixOldFlexbox(Radium(Text));
