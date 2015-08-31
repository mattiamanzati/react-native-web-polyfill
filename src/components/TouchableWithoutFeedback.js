var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class TouchableWithoutFeedback extends React.Component{
  onClick(e){
    // handle the onPress event passed as a prop
    if(this.props.onPress) this.props.onPress(e);
  }

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
    // there is no press in event, so do nothing
    if(!onPressOut) return;
    // call the event after a delay
    setTimeout(() => onPressOut(e), delayPressOut);
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
    React.findDOMNode(this.refs.child).addEventListener('click', this.onClick.bind(this));
    React.findDOMNode(this.refs.child).addEventListener('mousedown', this.onMouseDown.bind(this));
    React.findDOMNode(this.refs.child).addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  componentDidUnmount(){
    React.findDOMNode(this.refs.child).removeEventListener('click', this.onClick.bind(this));
    React.findDOMNode(this.refs.child).removeEventListener('mousedown', this.onMouseDown.bind(this));
    React.findDOMNode(this.refs.child).removeEventListener('mouseup', this.onMouseUp.bind(this));
  }

  render(){
    // deconstruct from the props
    var {children, ...props} = this.props;

    // returns the component
    return React.cloneElement(children, {
      ref: 'child',
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
