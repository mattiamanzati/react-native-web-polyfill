var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class View extends React.Component{
    render(){
        return <div className="view" style={browserifyStyle(this.props.style)}>
          {this.props.children}
        </div>;
    }
}

module.exports = fixOldFlexbox(Radium(View));
