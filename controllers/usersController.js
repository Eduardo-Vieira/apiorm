// Model
var users = require('../models/users');

/**
 * Controller Users
 */

 // name controller
var Controller = 'users';
var title = '';

/**
 * action Index
 */
exports.actionIndex = function(req, res) {
    res.render(Controller+'/index', { title: 'Usuários Index', users: users });
};

/**
 * action detail
 */
exports.actionDetail = function(req, res) {
    res.render(Controller+'/detail', { title: 'Usuários Detail', users: users });
};

/**
 * action create
 */
exports.actionCreate = function(req, res) {
    res.render(Controller+'/create', { title: 'Usuários Create', users: users });
};

/**
 * action update
 */
exports.actionUpdate = function(req, res) {
    res.render(Controller+'/update', { title: 'Usuários Update', users: users });
};

/**
 * action ajax
 */
exports.actionXHR_List = function(req, res) {
    res.json({ user: 'Eduardo Vieira', nivel:'FullStack' });
};