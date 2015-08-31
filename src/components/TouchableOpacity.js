var React = require('react');
var TouchableWithoutFeedback = require('./TouchableWithoutFeedback');
var View = require('./View');

class TouchableOpacity extends React.Component{
  constructor(){
    super();
    this.state = {
      opacity: 1
    };
  }

  componentDidMount(){
    React.findDOMNode(this.refs.child).addEventListener('mousedown', this.onMouseDown.bind(this));
    React.findDOMNode(this.refs.child).addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  componentDidUnmount(){
    React.findDOMNode(this.refs.child).removeEventListener('mousedown', this.onMouseDown.bind(this));
    React.findDOMNode(this.refs.child).removeEventListener('mouseup', this.onMouseUp.bind(this));
  }

  onMouseUp(){
    this.setState({opacity: 1});
  }

  onMouseDown(){
    // deconstruct active opacity
    var {activeOpacity = 0.2} = this.props;
    // set the state
    this.setState({opacity: activeOpacity});
  }

  render(){
    // deconstruct style and other
    var {style, ...props} = this.props;

    return <TouchableWithoutFeedback ref='child' {...props}>
      <View style={[{opacity: this.state.opacity}].concat(Array.isArray(style) ? style : [style])}>
        {this.props.children}
      </View>
    </TouchableWithoutFeedback>;
  }
}

module.exports = TouchableOpacity;

/*
,
style: [styles.main].concat(Array.isArray(style) ? style : [style])
    .concat(Array.isArray(children.props.style) ? children.props.style : [children.props.style])
    */
