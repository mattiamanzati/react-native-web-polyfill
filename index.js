var React = require('react');

// classes polyfills
React.StyleSheet = require('./classes/StyleSheet');
React.AppRegistry = require('./classes/AppRegistry');

// components polyfills
React.View = require('./components/View');
React.Text = require('./components/Text');

// exports
module.exports = React;
