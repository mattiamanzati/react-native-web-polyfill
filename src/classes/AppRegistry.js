var React = require('react');

class AppRegistry{
  static registerComponent(name, fn){
    var element = React.createElement(fn(), null, null);
    // TODO: at the moment this is hardcoded. A config maybe?
    React.render(element, document.getElementById('app'));
  }
}

module.exports = AppRegistry;
