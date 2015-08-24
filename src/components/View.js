var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class View extends React.Component{
  render(){
    var classNames = ['view'];
    var {pointerEvents} = this.props;

    // if pointer events available, push them into the class
    if(pointerEvents) classNames.push(pointerEvents);

    // return the actual element
    return <div className={classNames.join(' ')} style={browserifyStyle(this.props.style)}>
      {this.props.children}
    </div>;
  }
}

module.exports = fixOldFlexbox(Radium(View));
