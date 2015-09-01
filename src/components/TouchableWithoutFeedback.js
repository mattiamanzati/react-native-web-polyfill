var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');
var Hammer = require('hammerjs');

class TouchableWithoutFeedback extends React.Component{
  onMouseDown(e){
    // handle onPressIn
    var {delayPressIn = 0, onPressIn = false, delayLongPress = 500, onLongPress = false} = this.props;
    // there is no press in event, so do nothing
    if(!onPressIn) return;
    // call the event after a delay
    this.delayPressIn = setTimeout(() => {
      onPressIn(e);
      // setup the delay for a long press
      this.delayLongPress = setTimeout(() => onLongPress(e), delayLongPress);
    }, delayPressIn);
  }


  onMouseUp(e){
    // handle onPressOut
    var {delayPressOut = 0, onPressOut = false} = this.props;
    // call the event after a delay
    setTimeout(() => {
      // handle onPressOut first
      if(onPressOut) onPressOut(e);
      // handle the onPress event passed as a prop
      if(this.props.onPress) this.props.onPress(e);
    }, delayPressOut);
    // if there was a delay for press in, clear it
    if(this.delayPressIn){
      clearTimeout(this.delayPressIn);
      this.delayPressIn = null;
    }
    // if there was a delay for a long press, clear it
    if(this.delayLongPress){
      clearTimeout(this.delayLongPress);
      this.delayLongPress = null;
    }
  }

  // bind event handlers
  componentDidMount(){
    // create hammer instance
    if(!this.hammer){
      this.hammer = new Hammer.Manager(React.findDOMNode(this.refs.main));
      var press = new Hammer.Press({time: 0, threshold: 10000});
      this.hammer.add([press]);
    }
    // binds events
    this.hammer.on('press', this.onMouseDown.bind(this));
    this.hammer.on('pressup', this.onMouseUp.bind(this));
  }

  componentDidUnmount(){
    // if no hammer instance exists, return
    if(!this.hammer) return;
    // unbind hammer events
    this.hammer.off('press', this.onMouseDown.bind(this));
    this.hammer.off('pressup', this.onMouseUp.bind(this));
    this.hammer.destroy();
  }

  render(){
    // deconstruct from the props
    var {children} = this.props;

    // returns the component
    return React.cloneElement(children, {
      ref: 'main',
      style: [styles.main]
          .concat(Array.isArray(children.props.style) ? children.props.style : [children.props.style])
    });
  }
}

var styles = {
  main: {
    cursor: 'pointer',
    userSelect: 'none'
  }
};

module.exports = fixOldFlexbox(Radium(TouchableWithoutFeedback));
