
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.jasmine = function(req, res){
  res.render('jasmine', { title: 'Jasmine' });
};