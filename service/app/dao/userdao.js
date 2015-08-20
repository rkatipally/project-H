var User = require('../models/user');
var Login = require('../models/login');
var express    = require('express'); 
var app    = express();  
var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
	  done(null, user._id);
	});
	 
	passport.deserializeUser(function(id, done) {
	  User.findById(id, function(err, user) {
	    done(err, user);
	  });
	});


var isValidPassword = function(user, password){
		  return bCrypt.compareSync(password, user.password);
	};
passport.use('login', new LocalStrategy({
	    passReqToCallback : true
	  },
	  function(req, username, password, done) { 
	    // check in mongo if a user with username exists or not
	    User.findOne({ 'username' :  username }, 
	      function(err, user) {
	        // In case of any error, return using the done method
	        if (err)
	          return done(err);
	        // Username does not exist, log error & redirect back
	        if (!user){
	          console.log('User Not Found with username '+username);
	          return done(null, false, 
	                req.flash('message', 'User Not found.'));                 
	        }
	        // User exists but wrong password, log the error 
	        if (!isValidPassword(user, password)){
	          console.log('Invalid Password');
	          return done(null, false, 
	              req.flash('message', 'Invalid Password'));
	        }
	        // User and password both match, return user from 
	        // done method which will be treated like success
	        return done(null, user);
	      }
	    );
	}));

passport.use('signup', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    findOrCreateUser = function(){
      // find a user in Mongo with provided username
      User.findOne({'username':username},function(err, user) {
        // In case of any error return
        if (err){
          console.log('Error in SignUp: '+err);
          return done(err);
        }
        // already exists
        if (user) {
          console.log('User already exists');
          return done(null, false, 
             req.flash('message','User Already Exists'));
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User();
          // set the user's local credentials
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.email = req.param('email');
          newUser.firstName = req.param('firstName');
          newUser.lastName = req.param('lastName');
 
          
      	var user = new User();      // create a new instance of the Bear model
        user.firstName = request.body.firstname;  
        user.lastName = request.body.lastname;
        user.email = request.body.email;
        user.streetAddress = request.body.streetaddress;
        user.aptNumber = request.body.aptnumber;
        user.city = request.body.city;
        user.state = request.body.state;
        user.zipCode = request.body.zipcode;
        user.userid = request.body.username;
        user.password = createHash(request.body.password);
        user.created_dt = new Date();
        user.updated_dt = new Date();
          // save the user
          user.save(function(err) {
            if (err){
              console.log('Error in Saving user: '+err);  
              throw err;  
            }
            console.log('User Registration succesful');    
            return done(null, user);
          });
        }
      });
    };
     
    // Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  })
);
	
var signUpUSer = function(request, response){
	
	var user = new User();      // create a new instance of the Bear model
    user.firstName = request.body.firstname;  
    user.lastName = request.body.lastname;
    user.email = request.body.email;
    user.streetAddress = request.body.streetaddress;
    user.aptNumber = request.body.aptnumber;
    user.city = request.body.city;
    user.state = request.body.state;
    user.zipCode = request.body.zipcode;
    user.userid = request.body.userid;
    user.created_dt = new Date();
    user.updated_dt = new Date();
     
    // save the bear and check for errors
    var isSuccess = true;
     user.save(function(err) {
        if (err)
        	isSuccess = false; 

        console.log("user created");
       
    });
    
    var login  = new Login();
    login.userid = request.body.userid;
    login.password = request.body.password;
    login.created_dt = new Date();
    login.updated_dt = new Date();
    
    login.save(function(err){
    	
    	if(err)
    		isSuccess = false; 
    	console.log("login created");
    
    });
    
	return isSuccess;
};

var login = function(login_in){
    var isSuccess = false;
	Login.findById(req.params.userId, function(err, login) {
        if (err)
            res.send(err);
        if(login.password == login_in.password)
        	isSuccess =  true;
    });
	return isSuccess;
};

module.exports = { signUpUser : signUpUSer, login : login }