var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//field names: type
var userSchema = new Schema({
  name: String,
  username: {type: String, unique: true},
  admin: Boolean,
  create_at: Date,
  age: Number
});

//tell mongoose to make our collection or table
//give it a name and the schema we just created
//WARNING: lowercase and plural collection name, 1st param below 'users'
var User = mongoose.model('users', userSchema);//table or collection name, schema var name
module.exports = User;
