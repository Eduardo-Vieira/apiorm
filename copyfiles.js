/**
 * Copy files for projetc
 * 
 */
var fs = require('fs-extra');
var path = require('path');
var modules = __dirname+'/node_modules/';

console.log('Modules Files');

//Jquery
fs.copySync(path.resolve(modules,'jquery/dist/jquery.min.js'), 'public/assets/jquery/jquery.min.js');

// bootstrap
fs.copySync(path.resolve(modules,'bootstrap/dist/css/bootstrap.min.css'), 'public/assets/bootstrap/bootstrap.min.css');
fs.copySync(path.resolve(modules,'bootstrap/dist/js/bootstrap.min.js'),  'public/assets/bootstrap/bootstrap.min.js');
