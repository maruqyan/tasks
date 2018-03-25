var express = require('express');
var router = express.Router();
const Users = require('../model/schema/users');

router.get('/', function(req, res, next) {
  Users.find({}, (err, data) => {
    res.render('users', {title: 'User Page', data: data})
  })
});

module.exports = router;
