var express = require('express');
var router = express.Router();
var fs = require('fs');

/**
 * main router
 */
router.get('/',function(req, res){
  res.render('index', { title: 'Página Inicial'});
});

/* auto route. MVC */
fs.readdirSync('./controllers').forEach(function(file){
  if(file.substr(-3)=='.js'){
    var n = file.length-3;
    var controllerName = file.substr(0,n);
    var fileControllers = require('../controllers/'+controllerName);
    var routeName = controllerName.replace('Controller','').toLocaleLowerCase();
    var keys = Object.keys(fileControllers); 

      keys.forEach(function(elemento) {        
        if(elemento.substr(0,6) == 'action'){
          if(elemento == 'actionIndex'){
            router.all('/'+routeName, fileControllers[elemento]);
          }else if(elemento != 'actionIndex'){            
            router.all('/'+routeName+'/'+elemento.replace('action','').toLocaleLowerCase(), fileControllers[elemento]); 
          }
        }
      });             
  }
});

module.exports = router;
