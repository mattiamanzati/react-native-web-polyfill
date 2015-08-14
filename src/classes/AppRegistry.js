var React = require('react');

class AppRegistry{
  static registerComponent(name, fn){
    // TODO: at the moment this is hardcoded. A config maybe?
    React.render(React.createElement(fn(), null, null), document.getElementById('app'));
  }
}

module.exports = AppRegistry;
