var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');

class NotPortedYet extends React.Component{
    render(){
        return <div className="view" style={browserifyStyle(this.props.style)}>
          Sorry, this component has not been ported yet.
        </div>;
    }
}

module.exports = Radium(NotPortedYet);
