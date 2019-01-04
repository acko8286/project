var express = require('express');
var User = require("../model/user.js");
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('start test.js');
});

router.get('/search', function (req, res, next) {
    var id = parseInt(req.query.id);
    var Count = 2;
    var pageSize = parseInt(req.query.pageSize);

    var query = User.find({ id: id });
    query.count(function (erro, count) {
        query.skip(Count).limit(pageSize).exec('find', function (err, items) {
            console.log(items);
            return res.json({ success: true, data: items, count: count });
        });
    })
    // res.send('start test.js');
});


router.post('/addmain', function (req, res, next) {
    var data = req.body.data
    res.send('respond with a post resource add main');
});

router.post('/adddetail', function (req, res, next) {
    var id = req.body.id
    var name = req.body.name
    var user = new User({
        id: id,                 //用户账号
        name: name
    });
    user.save(function (err) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            return res.json({ success: true });
            console.log("Res:" + res);
        }

    });

});

router.delete('/:id', function (req, res, next) {
    var data = req.params.id
    return res.json({ success: true, data: 'ret', msg: '' })
    res.send('respond with a post resource');
});


module.exports = router;