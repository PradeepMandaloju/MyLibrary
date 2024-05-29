var mongo=require('mongoose');
var schema=mongo.Schema;
var userSchema=new schema({
    username:String,
    password:String,
    email:String,
    phone:String
});

var user=mongo.model('user',userSchema);
module.exports=user;