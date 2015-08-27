var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class View extends React.Component{
  render(){
    // decostruct utility data from the props
    var {pointerEvents, ...props} = this.props;

    // create the class names
    var classNames = ['view'];

    // if pointer events available, push them into the class
    if(pointerEvents) classNames.push('pointer-events-' + pointerEvents);

    // return the actual element
    return <div className={classNames.join(' ')} style={browserifyStyle(this.props.style)}>
      {this.props.children}
    </div>;
  }
}

module.exports = fixOldFlexbox(Radium(View));
