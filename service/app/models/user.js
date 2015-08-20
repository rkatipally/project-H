var mongoose =  require('mongoose');
//mongoose.connect('mongodb://localhost/mydb');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	firstName :  String,
    lastName :  String,
    email :  String,
    dob :  Date,
    streetAddress :  String,
    aptNumber :  String,
    city :  String,
    state :  String,
    zipCode :  String,
    userid : String,
    created_dt : Date,
	Updated_dr : Date
});

module.exports = mongoose.model('User', UserSchema);

