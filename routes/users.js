var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  var data = req.body.data
  res.send('respond with a post resource');
})

router.delete('/:id', function (req, res, next) {
  var data = req.params.id
  return res.json({ success: true, data: 'ret', msg: '' })
  // res.send('respond with a post resource');
})

module.exports = router;
