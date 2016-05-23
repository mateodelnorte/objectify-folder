var debug = require('debug')('objectify-folder');
var fs = require('fs');
var path = require('path');

module.exports = function (options) {

  if (typeof options === 'string') {
    options = {
      path: options
    };
  }

  if ( ! options.path) throw new Error('objectify-folder requires a string dir path or an options param with a path property.');

  if ( ! options.fn) {
    var index = 0;
    options.fn = function (mod, result, file) {
      var basename = path.basename(file, '.js');
      result[basename] = mod;
    };
  }

  var files = fs.readdirSync(options.path);
  var result = {};

  files.forEach(function (file) {
    if (file === 'index.js' || file === '.DS_Store') return;
    var mod;
    var filepath = path.resolve(path.join(options.path, file));
    try {
      mod = require(filepath);
    } catch (err) {
      if (fs.lstatSync(filepath).isDirectory()) return;
      throw err;
    }
    options.fn(mod, result, file);
  });

  return result;

};