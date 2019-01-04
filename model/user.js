var mongoose = require('../dal/db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: Number ,                    //用户账号
    name: String 
});

module.exports = mongoose.model('User',UserSchema);