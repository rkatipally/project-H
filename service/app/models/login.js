var mongoose =  require('mongoose');
//mongoose.connect('mongodb://localhost/mydb');
var Schema = mongoose.Schema;

var LoginSchema = Schema({
	userid : String,
	password: String,
	created_dt : Date,
	Updated_dr : Date
});

module.exports = mongoose.model('Login', LoginSchema);