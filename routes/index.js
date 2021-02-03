var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blank', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/blank.html'));
});


// router.get('/checkout', function(req, res, next) {
//   res.sendFile(path.join(__dirname + '/../public/checkout.html'));
// });


module.exports = router;
