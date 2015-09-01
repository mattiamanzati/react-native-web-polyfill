var React = require('react');
var TouchableWithoutFeedback = require('./TouchableWithoutFeedback');
var View = require('./View');
var Hammer = require('hammerjs');

class TouchableOpacity extends React.Component{
  constructor(){
    super();
    this.state = {
      opacity: 1
    };
  }

  // bind event handlers
  componentDidMount(){
    // create hammer instance
    if(!this.hammer){
      this.hammer = new Hammer.Manager(React.findDOMNode(this.refs.main));
      var press = new Hammer.Press({time: 0, threshold: 10000});
      this.hammer.add([press]);
    }
    // binds events
    this.hammer.on('press', this.onMouseDown.bind(this));
    this.hammer.on('pressup', this.onMouseUp.bind(this));
  }

  componentDidUnmount(){
    // if no hammer instance exists, return
    if(!this.hammer) return;
    // unbind hammer events
    this.hammer.off('press', this.onMouseDown.bind(this));
    this.hammer.off('pressup', this.onMouseUp.bind(this));
    this.hammer.destroy();
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

    return <TouchableWithoutFeedback  ref='main' {...props}>
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
