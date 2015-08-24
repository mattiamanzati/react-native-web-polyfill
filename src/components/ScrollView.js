var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');
var View = require('./View');

class ScrollView extends React.Component{
  render(){
    var style = {};

    if(this.props.horizontal) style.overflowX = 'auto';
    if(this.props.vertical) style.overflowY = 'auto';

    return <div className="scroll-view" style={browserifyStyle(this.props.style)}>
      <View style={browserifyStyle(this.props.contentContainerStyle)}>{this.props.children}</View>
    </div>;
  }
}

module.exports = fixOldFlexbox(Radium(ScrollView));
