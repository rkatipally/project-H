var express    = require('express');        // call express
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
var mongoose   = require('mongoose');
var passport = require('passport');
var userdao =  require("/Users/raj/work/ekarma-service/app/dao/userdao");
mongoose.connect('mongodb://localhost/appdev');
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

/* GET login page. */
router.get('/', function(req, res) {
  // Display the Login page with any flash message, if any
  res.render('index', { message: req.flash('message') });
});
/* Handle Login POST */
router.post('/login', passport.authenticate('login', {
  successRedirect: '/home',
  failureRedirect: '/',
  failureFlash : true 
}));

/* GET Registration Page */
router.get('/signup', function(req, res){
  res.render('register',{message: req.flash('message')});
});

/* Handle Registration POST */
router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/home',
  failureRedirect: '/signup',
  failureFlash : true 
}));


router.route('/login').
get(function(req, res){
	console.log("inside login service");
	var isSuccess  =  userdao.login(req.login);
	if(isSuccess){
		res.sendStatus(200);
    }else{
    	res.sendStatus(403);
    }
});

/*

router.route('/users')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

    	var isSucess = userdao.signUpUser(req, res);
        
        
        if(isSuccess){
        	res.json({ message: 'user created!' });
        }else{
        	
        	res.json({ message: 'error occurred!' });
        }
        

    })
// more routes for our API will happen here
    .get(function(req, res) {
            res.json("bear get requested");
        });
   


router.route('/users/:user_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {

    });
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
*/
module.exports = router;

