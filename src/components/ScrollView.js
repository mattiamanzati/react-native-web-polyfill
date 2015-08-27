var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');
var View = require('./View');

class ScrollView extends React.Component{
  render(){
    // set of classNames
    var classNames = ['scroll-view'];

    // descructuring utility data
    var {horizontal, style} = this.props;

    // apply style to correct scroll direction
    classNames.push(horizontal ? 'horizontal' : 'vertical');

    // return the component, use a View as a wrapper
    return <div className={classNames.join(' ')} style={browserifyStyle(style)}>
      <View style={browserifyStyle(this.props.contentContainerStyle)}>{this.props.children}</View>
    </div>;
  }
}

module.exports = fixOldFlexbox(Radium(ScrollView));
