var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');
var Url = mongoose.model('Url');
var jwt = require('express-jwt');
//authentication middleware
var auth = jwt({
    secret: process.env.SECRET, userProperty: 'payload'
});
//route to register new user
router.post('/register', function(req, res, next){
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Please fill out all fields'});
    }
    var user = new User();
    user.username = req.body.username;
    user.setPassword(req.body.password)
    user.save(function (err){
    if(err){ return next(err); }
        return res.json({
            token: user.generateJWT()
        });
    });
});
//login route
router.post('/login', function(req, res, next){
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message: 'Please fill out all fields'});
    }
    passport.authenticate('local', function(err, user, info){
        if(err){ return next(err); }
        if(user){
            return res.json({
                token: user.generateJWT()
            });
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});
//name param
router.param('name', function(req, res, next, name) {
    Url.findOne({name: new RegExp('^'+name+'$', 'i')}, function (err, url){
        if (err) {
            return next(err);
        }
        if (!url) {
            return res.status(400).json({message: 'Nothing with that name here...'});
        }
        console.log(url);
        req.url = url;
        return next();
    });
});
//get post with param id
router.get('/urls/:name', function(req, res, next) {
    res.json(req.url);
});
//post with param id
router.post('/urls/', function(req, res, next) {
    var url = new Url(req.body);
    url.save(function(err, url){
        if(err){
            return next(err);
        }
        res.json(url);
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
