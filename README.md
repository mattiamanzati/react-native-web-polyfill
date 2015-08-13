# react-native-web-polyfill
A set of classes and react components to make work your react-native app in a browser. (with some limitations obviously)

### WARNING!
This package is in pre-pre-pre-pre-pre-pre-pre-pre-pre-beta version! API will not change (as we are emulating the react-native ones ahah) but lots of components or properties could be missing.
We encourage you to help us by reporting those or PR implementation of them! :D

### What limitations?
Since it is all plain javascript, any native binary module won't be supported.
By the way we are planning to provide an extra folder that will contains polyfills and workaround for the exposed api of these modules.

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
    require("react-native-web-polyfill/macro/image")
  ],
}
```
- Run webpack
- Create an HTML document, with a div with an id="app" including the bundled webpack script and linking the css stylesheet react-native-web-polyfill/bundle.css
- Report any error to let us improve and help you! :D
