
function applyPxIfNumber(value){
  return typeof value === 'number' ? value + 'px' : value;
}

function browserifyStyle(style = {}){
  // Properties that are numeric on react-native but needs px on web
  var propsThatNeedsPx = [
    'borderRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderWidth',
    'borderTopWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'bottom',
    'height',
    'left',
    'margin',
    'marginBottom',
    'marginTop',
    'marginLeft',
    'marginRight',
    'marginHorizontal',
    'marginVertical',
    'padding',
    'paddingVertical',
    'paddingHorizontal',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'right',
    'shadowRadius',
    'top',
    'width',
    'fontSize',
    'lineHeight'
  ];
  // Property that has Vertical and Horizontal properties that does'nt exists on the web
  var doubleDirectionProps = [
    'padding',
    'margin'
  ];

  // Object to store the output to
  var output = {};

  // If horizontal-vertical style exists, convert them to bottom-top or left-right definition
  for(var i = 0; i < doubleDirectionProps.length; i++){
    // store the property name
    var prop = doubleDirectionProps[i];
    // Check for horizontal
    if(typeof style[prop + 'Horizontal'] !== 'undefined'){
      style[prop + 'Left'] = typeof style[prop + 'Left'] === 'undefined' ?
        style[prop + 'Horizontal'] :
        style[prop + 'Left'];
      style[prop + 'Right'] = typeof style[prop + 'Right'] === 'undefined' ?
        style[prop + 'Horizontal'] :
        style[prop + 'Right'];
      // delete from the style (TODO: maybe we should object.assign the stype to another style to avoid object modifications?)
      delete style[prop + 'Horizontal'];
    }
    // Check for vertical
    if(typeof style[prop + 'Vertical'] !== 'undefined'){
      style[prop + 'Top'] = typeof style[prop + 'Top'] === 'undefined' ?
        style[prop + 'Vertical'] :
        style[prop + 'Top'];
      style[prop + 'Bottom'] = typeof style[prop + 'Bottom'] === 'undefined' ?
        style[prop + 'Vertical'] :
        style[prop + 'Bottom'];
      // delete from the style (TODO: maybe we should object.assign the stype to another style to avoid object modifications?)
      delete style[prop + 'Vertical'];
    }
  }

  for(var k in style){
    if(style.hasOwnProperty(k)){
      // Get the react-native style value
      var value = style[k];

      // Apply px if property needs it
      if(propsThatNeedsPx.indexOf(k) > -1){
        value = applyPxIfNumber(value);
      }

      // copy the value over to a new object
      output[k] = value;
    }
  }

  // Returns final browserified style
  return output;
}

module.exports = function(...styles){
  var output = [];

  // Expect that styles is an array
  styles = Array.isArray(styles) ? styles : [styles];
  for(var i = 0; i < styles.length; i++){
    // Since the style itself could be an array, normalize it to be an array
    var style = Array.isArray(styles[i]) ? styles[i] : [styles[i]];
    for(var j = 0; j < style.length; j++){
      // append the browserified style to the output
      output.push(browserifyStyle(style[j]));
    }
  }

  return output;
};
