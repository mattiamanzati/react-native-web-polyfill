// this module will apply max-width: 100% on flex-direction: column parents
var React = require('react');
var Radium = require('radium');

var IE10 = navigator.userAgent.toString().toLowerCase().indexOf("trident/6") > -1;

module.exports = (SuperComponent) => {
  class FlexboxFix extends React.Component{
    render(){
      // deconstruct style
      var {style} = this.props;

      // construct a final computedStyle object from styles.
      style = Array.isArray(style) ? style : [style];
      /*
      var computedStyle = {};

      for(var i = 0; i < style.length; i++){
        computedStyle = {
          ...computedStyle,
          ...style[i]
        };
      }

      // if computedStyle contains a margin declaration, warn about max-width being added.
      if(computedStyle.margin || computedStyle.marginHorizontal || computedStyle.marginLeft || computedStyle.marginRight){
        console.log('Warning! I fixed old flexbox support by adding a max-width, but this may broke your layout.');
      }
      TODO: Add a warning?
      */

      // there is no style provided, so go on.
      if(!IE10 || !style) return <SuperComponent {...this.props} />;

      // returns a cloned element
      return <SuperComponent {...this.props} style={[{maxWidth: '100%'}].concat(style)} />;
    }
  }

  return FlexboxFix;
};
