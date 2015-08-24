var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class TouchableWithoutFeedback extends React.Component{
  onClick(e){
    if(this.props.onPress) this.props.onPress(e);
  }

  render(){
    return <div onClick={(e) => this.onClick(e)} className="touchable-without-feedback" style={browserifyStyle(this.props.style)}>
      {this.props.children}
    </div>;
  }
}

module.exports = fixOldFlexbox(Radium(TouchableWithoutFeedback));
