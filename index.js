var React = require('react');

// classes polyfills
React.StyleSheet = require('./classes/StyleSheet');
React.AppRegistry = require('./classes/AppRegistry');

// components polyfills
React.View = require('./components/View');
React.Text = require('./components/Text');
React.Image = require('./components/Image');

// Not ported yet.
var notPortedYetComponents = ['ActivityIndicatorIOS', 'DatePickerIOS', 'ListView', 'MapView',
  'Navigator', 'NavigatorIOS', 'PickerIOS', 'ScrollView', 'SegmentedControlIOS',
  'SliderIOS', 'SwitchIOS', 'TabBarIOS', 'TextInput', 'TouchableHighlight', 'TouchableOpacity',
  'TouchableWithoutFeedback', 'WebView'];
for(var i = 0; i < notPortedYetComponents.length; i++){
  React[notPortedYetComponents[i]] = require('./components/NotPortedYet');
}

// exports
module.exports = React;
