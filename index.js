var React = require('react');

// classes polyfills
React.StyleSheet = require('./src/classes/StyleSheet');
React.AppRegistry = require('./src/classes/AppRegistry');
React.PixelRatio = require('./src/classes/PixelRatio');

// components polyfills
React.View = require('./src/components/View');
React.Text = require('./src/components/Text');
React.Image = require('./src/components/Image');
React.TextInput = require('./src/components/TextInput');
React.ScrollView = require('./src/components/ScrollView');

React.TouchableWithoutFeedback = require('./src/components/TouchableWithoutFeedback');
React.TouchableHighlight = require('./src/components/TouchableWithoutFeedback');
React.TouchableOpacity = require('./src/components/TouchableOpacity');

// Not ported yet.
var notPortedYetComponents = ['ActivityIndicatorIOS', 'DatePickerIOS', 'ListView', 'MapView',
  'Navigator', 'NavigatorIOS', 'PickerIOS', 'SegmentedControlIOS',
  'SliderIOS', 'SwitchIOS', 'TabBarIOS', 'WebView'];
for(var i = 0; i < notPortedYetComponents.length; i++){
  React[notPortedYetComponents[i]] = require('./src/components/NotPortedYet');
}

// exports
module.exports = React;
