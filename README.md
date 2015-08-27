# react-native-web-polyfill
A set of classes and react components to make work your react-native app in a browser. (with some limitations obviously)

### WARNING!
This package is in pre-pre-pre-pre-pre-pre-pre-pre-pre-beta version! API will not change (as we are emulating the react-native ones ahah) but lots of components or properties could be missing.
We encourage you to help us by reporting those or PR implementation of them! :D

### What limitations?
Since it is all plain javascript, any native binary module won't be supported.
By the way we are planning to provide an extra folder that will contains polyfills and workaround for the exposed api of some of these modules.

### Check out the examples!
- [Sample App](http://mattiamanzati.github.io/react-native-web-polyfill/examples/SampleApp/)
- [Tic Tac Toe](http://mattiamanzati.github.io/react-native-web-polyfill/examples/TicTacToe/)
- [UIExplorer](http://mattiamanzati.github.io/react-native-web-polyfill/examples/UIExplorer/)

NOTE: Since the original UIExplorer contains a lot of examples that also uses native modules, we have copied only the components already ported, but the may miss support for some props.

### How can i install this?
- Move into your react-native project folder and install react-native-web-polyfill
```
npm install react-native-web-polyfill
```
- Setup a webpack.config.js file for your project
- Inside your webpack configuration, alias the react-native package to the react-native-web-polyfill package, and setup the external for the image loader.
```javascript
{
  // other webpack config
  resolve: {
    alias: {
      "react-native": "react-native-web-polyfill"
    }
  }
  // setup the macro to resolve require("image!...")
  externals: [
    require("react-native-web-polyfill/src/macro/image")
  ],
}
```
- Run webpack
- Create an HTML document, with a div with an id="app" including the bundled webpack script and linking the css stylesheet node_modules/react-native-web-polyfill/style.css
- Report any error to let us improve and help you! :D

### Building the library
Move into the package folder and run in your terminal:
```
npm run build
```

----------
## Supported Classes & Components

 - [X] StyleSheet
   - [X] create

 - [ ] AppRegistry
   - [ ] getAppKeys
   - [X] registerComponent
   - [ ] registerConfig
   - [ ] registerRunnable
   - [ ] runApplication

 - [ ] View
   - [ ] accessible
   - [ ] accessibilityLabel
   - [ ] accessibilityComponentType
   - [ ] accessibilityLiveRegion
   - [ ] accessibilityTraits
   - [ ] onAcccessibilityTap
   - [ ] onMagicTap
   - [X] testID
   - [ ] onMoveShouldSetResponder
   - [ ] onResponderGrant
   - [ ] onResponderMove
   - [ ] onResponderReject
   - [ ] onResponderRelease
   - [ ] onResponderTerminate
   - [ ] onResponderTerminationRequest
   - [ ] onStartShouldSetResponder
   - [ ] onStartShouldSetResponderCapture
   - [ ] onLayout
   - [X] pointerEvents
   - [X] style
   - [X] removeClippedSubviews *useless*
   - [X] renderToHardwareTextureAndroid *useless*
   - [X] shouldRasterizeIOS *useless*
   - [ ] collapsable

 - [ ] Text
   - [ ] numberOfLines
   - [ ] onLayout
   - [X] onPress
   - [X] suppressHighlighting
   - [X] style
   - [X] testID
   - [ ] allowFontScaling

 - [ ] Image
   - [ ] onLayout
   - [X] resizeMode
   - [X] source
   - [X] style
   - [X] testID
   - [ ] accessibilityLabel
   - [ ] accessible
   - [ ] capInsets
   - [ ] defaultSource
   - [ ] onError
   - [ ] onLoad
   - [ ] onLoadEnd
   - [ ] onLoadStart
   - [ ] onProgress

 - [ ] ScrollView
   - [ ] alwaysBounceHorizontal
   - [ ] alwaysBounceVertical
   - [ ] automaticallyAdjustContentInsets
   - [ ] bounces
   - [ ] bouncesZoom
   - [ ] canCancelContentTouches
   - [ ] centerContent
   - [X] contentContainerStyle
   - [ ] contentInset
   - [ ] contentOffset
   - [ ] decelerationRate
   - [ ] directionalLockEnabled
   - [X] horizontal
   - [ ] keyboardDismissMode
   - [ ] keyboardShouldPersistTaps
   - [ ] maximumZoomScale
   - [ ] minimumZoomScale
   - [ ] onScroll
   - [ ] onScrollAnimationEnd
   - [ ] pagingEnabled
   - [ ] removeClippedSubviews
   - [ ] scrollEnabled
   - [ ] scrollEventThrottle
   - [ ] scrollIndicatorInsets
   - [ ] scrollsToTop
   - [ ] showsHorizontalScrollIndicator
   - [ ] showsVerticalScrollIndicator
   - [ ] stickyHeaderIndices
   - [X] style
   - [ ] zoomScale

 - [ ] TextInput
   - [ ] autoCapitalize
   - [ ] autoCorrect
   - [ ] autoFocus
   - [ ] clearButtonMode
   - [ ] clearTextOnFocus
   - [X] defaultValue
   - [ ] editable
   - [ ] enablesReturnKeyAutomatically
   - [ ] keyboardType
   - [ ] maxLength
   - [X] multiline
   - [X] onBlur
   - [X] onChange
   - [X] onChangeText
   - [ ] onEndEditing
   - [X] onFocus
   - [ ] onLayout
   - [ ] onSubmitEditing
   - [X] placeholder
   - [ ] placeholderTextColor
   - [ ] returnKeyType
   - [ ] secureTextEntry
   - [ ] selectTextOnFocus
   - [ ] selectionState
   - [X] style
   - [X] testID
   - [X] textAlign
   - [ ] textAlignVertical
   - [ ] underlineColorAndroid
   - [X] value

 - [ ] TouchableHighlight
   - [ ] activeOpacity
   - [ ] onHideUnderlay
   - [ ] onShowUnderlay
   - [X] style
   - [ ] underlayColor

 - [ ] TouchableOpacity
   - [ ] ...TouchableWithoutFeedback properties
   - [ ] activeOpacity

 - [ ] TouchableWithoutFeedback
   - [ ] accessible
   - [ ] delayLongPress
   - [ ] delayPressIn
   - [ ] delayPressOut
   - [ ] onLongPress
   - [X] onPress
   - [ ] onPressIn
   - [ ] onPressOut
