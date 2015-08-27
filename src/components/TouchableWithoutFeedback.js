var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class TouchableWithoutFeedback extends React.Component{
  onClick(e){
    // handle the onPress event passed as a prop
    if(this.props.onPress) this.props.onPress(e);
  }

  render(){
    // deconstruct from the props
    var {style, ...props} = this.props;

    // create the class names
    var classNames = ['touchable-without-feedback'];

    // returns the component
    return <div className={classNames.join(' ')} onClick={(e) => this.onClick(e)} style={browserifyStyle(style)}>
      {this.props.children}
    </div>;
  }
}

module.exports = fixOldFlexbox(Radium(TouchableWithoutFeedback));
