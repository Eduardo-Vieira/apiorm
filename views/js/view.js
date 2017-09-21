var method = '';
var controller = '';
var pathname = window.location.pathname.substr(1, window.location.pathname.length).split('/');

controller = pathname[0];
method = pathname[1];