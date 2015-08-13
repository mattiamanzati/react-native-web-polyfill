var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');

class View extends React.Component{
    render(){
        return <div className="view" style={browserifyStyle(this.props.style)}>
          {this.props.children}
        </div>;
    }
}

module.exports = Radium(View);
