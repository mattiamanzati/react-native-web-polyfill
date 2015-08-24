var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');
var fixOldFlexbox = require('../utils/fixOldFlexbox');

class NotPortedYet extends React.Component{
    render(){
      return <div className="view" style={browserifyStyle(styles.main, this.props.style)}>
        {this.props.children}
        <div style={browserifyStyle(styles.overlay)}>NotPortedYet!</div>
      </div>;
    }
}

var styles = {
  main: {
    borderColor: '#ff0000',
    borderWidth: 2
  },
  overlay: {
    backgroundColor: 'rgba(255,0,0,0.4)',
    color: '#FFFFFF',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
}

module.exports = fixOldFlexbox(Radium(NotPortedYet));
