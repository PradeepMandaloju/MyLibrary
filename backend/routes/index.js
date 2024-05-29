var express = require('express');
var router = express.Router();
var user=require('../userSchema/user');
var book=require('../bookSchema/book');


    


                //GET BOOKS

router.get('/books',(req,res)=>{
  book.find({})
  .then((data)=>res.json(data))
  .catch((err)=>console.log(err))
  });

                
                //ADD BOOK
  router.post('/add',(req,res)=>{
  var newbook= new book(req.body);
  newbook.save()
  .then(()=>res.send("New Book Added!"))
  .catch((err)=>console.log(err))
})
                

                //GET USERS

router.get('/users',(req,res)=>{
  user.find({})
  .then((data)=>res.json(data))
  .catch((err)=>console.log(err))
});

                  //USER REGISTRATION

router.post('/reg',(req,res)=>{
var username=req.body.username;
user.findOne({username:username}).select("username")
.then((data)=>{if(data==null){
  var newuser=new user(req.body);
  newuser.save()
.then(()=>res.send("Registered Successfully!"))
.catch((err)=>console.log(err))
}
else{
  res.send("User already exists")
}
})
.catch((err)=>console.log(err));
});


                    //LOGIN

router.post('/login',(req,res)=>{
  var {username,password}=req.body;
  user.findOne({username:username}).select("password")
  .then((data)=>{if(data==null){
    res.send('User Not Found');
  }
  else{
    if(data.password==password){
      res.send("Login Success!");
    }
    else{
      res.send("Wrong Password!");
    }
  }
})
.catch((err)=>console.log(err));
});


                  //DELETE

router.delete('/del/:id',(req,res)=>{
  let Id=req.params.id;
  book.deleteOne({_id:Id})
  .then((result)=>{
    if(result.deletedCount>0)
      res.send("Book deleted")
    else
      res.send("Book not found!")
  })
  .catch((err)=>console.log(err))
});


                  //UPDATE

router.put('/update/:id',(req,res)=>{
  let Id=req.params.id;
  let updateddata=req.body;
  book.updateOne({_id:Id},updateddata)
  .then((result)=>{
    if(result.modifiedCount>0)
      res.send("Book details Updated")
    else
      res.send("No Change found!")
  })
  .catch((err)=>console.log(err))
  })


module.exports = router;
