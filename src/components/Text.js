var React = require('react');
var Radium = require('radium');
var browserifyStyle = require('../utils/browserifyStyle');

class Text extends React.Component{
  onClick(e){
    if(this.props.onPress) this.props.onPress(e);
  }

  render(){
      return <span onClick={(e) => this.onClick(e)} className="text" style={browserifyStyle(this.props.style)}>
        {this.props.children}
      </span>;
  }
}

module.exports = Radium(Text);
