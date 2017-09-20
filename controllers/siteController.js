/**
 * Controller Site
 */

 // name controller
 var Controller = 'site';

 /**
  * action Index
  */
 exports.actionIndex = function(req, res) {
     res.render(Controller+'/index', { title: 'site Index'});
 };
 