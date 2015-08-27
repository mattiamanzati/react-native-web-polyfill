var path = require('path');

var params = Array.isArray(process.argv) ? process.argv : [process.argv];

if(params.length > 0){
  var templatePath = __dirname + "/../template/";
  var scriptFile = params[params.length - 1];

}else{
  console.log('Missing parameters.');
}
