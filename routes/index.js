var express = require('express');
var router = express.Router();
const Users = require('../model/schema/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', data: {}});
});

router.get('/update/:id', function(req, res, next) {
  Users.find({_id: req.params.id}, (err, data) => {
    let date = new Date(data[0].datebirth);
    data[0].date = date.getFullYear()  + '-' + String("00" + (parseInt(date.getMonth()) + 1)).slice(-2)  + '-' + String("00" + date.getDate()).slice(-2);
    res.render('index', {title: 'User Update', data: data[0]})
  })
});

router.post('/', (req, res, next) => {
  let users = new Users(req.body);
  console.log(users)
  users.save().then((user) => {
    res.send('ok')
  }).catch((err) => {
    throw err;
    console.log(err);
  })
})

router.put('/', (req, res, next) => {
  if(req.body.id){
    Users.update({"_id": req.body.id}, req.body).then((user) => {
      res.send('updated')
    })
  }else{
      res.send('error')
  }
})

router.delete('/', (req, res, next) => {
  if(req.body.id){
    Users.remove({"_id": req.body.id}).then((user) => {
      res.send('deleted')
    })
  }else{
      res.send('error')
  }
})


module.exports = router;
