const loaderUtils = require('loader-utils');
module.exports = function (source, sourceMap, meta) {
  console.log("hello loader~",source,loaderUtils(this));
  return "console.log('hello loader~')";
};
