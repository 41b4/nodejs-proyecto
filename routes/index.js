var express = require('express');
const cookie = require('cookie-parser')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NEWS' });
});

/*COOKIES*/
router.get('/cookie/:set',(req, res, next)=>{
  console.log(req.params)
  res.cookie('theme' , req.params.set)
  res.redirect('/')
})



module.exports = router;
