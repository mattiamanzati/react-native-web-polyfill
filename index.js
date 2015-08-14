var React = require('react');

// classes polyfills
React.StyleSheet = require('./src/classes/StyleSheet');
React.AppRegistry = require('./src/classes/AppRegistry');

// components polyfills
React.View = require('./src/components/View');
React.Text = require('./src/components/Text');
React.Image = require('./src/components/Image');
React.TextInput = require('./src/components/TextInput');
React.ScrollView = require('./src/components/ScrollView');

// Not ported yet.
var notPortedYetComponents = ['ActivityIndicatorIOS', 'DatePickerIOS', 'ListView', 'MapView',
  'Navigator', 'NavigatorIOS', 'PickerIOS', 'SegmentedControlIOS',
  'SliderIOS', 'SwitchIOS', 'TabBarIOS', 'TouchableHighlight', 'TouchableOpacity',
  'TouchableWithoutFeedback', 'WebView'];
for(var i = 0; i < notPortedYetComponents.length; i++){
  React[notPortedYetComponents[i]] = require('./src/components/NotPortedYet');
}

// exports
module.exports = React;
