var mongo=require('mongoose');
var schema=mongo.Schema;
var bookSchema=new schema({
    image:String,
    bookName:String,
    author:String,
    genre:String,
    year:String,
    show:Boolean
});

var book=mongo.model('book',bookSchema);
module.exports=book;