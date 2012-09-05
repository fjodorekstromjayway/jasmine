
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Jasmine Test Project' });
};

exports.jasmine = function(req, res){
  res.render('jasmine', { title: 'Jasmine' });
};

exports.pagetotest = function(req, res){
  res.render('pagetotest', { title: 'Page to test' });
};