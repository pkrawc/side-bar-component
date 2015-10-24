var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sidebar', {
    title: 'sidebar',
    user: {
      name: 'Yogi Bear',
      email: 'email@email.com',
      
    }
  });
});

module.exports = router;
