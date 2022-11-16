
var mongodb = require('mongodb');
var mongoClient =mongodb.MongoClient;
var url ='mongodb://localhost:27017' ;
var dbname = 'PizzariaDB' ;
var express = require('express') ;
var bodyparser = require('body-parser') ;
var cors = require('cors')

var app= express();
app.use(bodyparser.json());
app.use(cors());

//get method for fetching data from mongoDB
//Pizza fetching
app.get('/getpizza',function(req,res){
    mongoClient.connect(url,function(err,client){
        if(err){
            console.log(err)
        }
        else{
            var db = client.db(dbname);
            db.collection('pizza').find({}).toArray(function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    res.send(result);
                }
            })
            client.close();
        }
    })
})


//ingredients fetching
app.get('/getingredients',function(req,res){
    mongoClient.connect(url,function(err,client){
        if(err){
            console.log(err)
        }
        else{
            var db = client.db(dbname);
            db.collection('ingredients').find({}).toArray(function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    res.send(result);
                }
            })
            client.close();
        }
    })
})

//fetching customer details for veryification
app.get('/getuser',function(req,res){
   // var pass=req.params.passw;
    mongoClient.connect(url,function(err,client){
        if(err){
            console.log(err)
        }
        else{
            var db = client.db(dbname);
            db.collection('customers').find({}).toArray(function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    res.send(result);
                }
            })

            client.close();
            console.log("user returned")
        }
    })
})

//adding user to db via register page

app.post('/adduser',(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var pass=req.body.pass;
    var email=req.body.email;
    var phone=req.body.phone;
    var type=req.body.type;

    mongoClient.connect(url,function(err,client){
       
        if(err) console.log(err);
        else{
            var db=client.db(dbname);
            db.collection('customers').insertOne({
               fname:fname,
               lname:lname,
               phone:phone,
               email:email,
               password:pass,
                type:type

            })
        
            client.close();
            res.send("User Added Successfully:")
        }
    })
})

//fetching cart details of user!
app.get('/getcart/:email',function(req,res){
    
     mongoClient.connect(url,function(err,client){
         var email=req.params.email;
         if(err){
             console.log(err)
         }
         else{
             var db = client.db(dbname);
             db.collection('cart').find({email:email}).toArray(function(err,result){
                 if(err){
                     console.log(err)
                 }
                 else{
                     res.send(result);
                 }
             })
 
             client.close();
             console.log("Cart Items Rendered! ")
         }
     })
 })
 
//post method to add to cart from orderpizza


app.post('/addcart',(req,res)=>{
    var email=req.body.email;
    var id=req.body.id;
    var price=req.body.price;
    var name=req.body.name;
  

    mongoClient.connect(url,function(err,client){
       
        if(err) console.log(err);
        else{
            var db=client.db(dbname);
            db.collection('cart').insertOne({
               email:email,
               id:id,
               price:price,
               name:name

            })
        
            client.close();
            res.send("Cart item added Successfully:")
        }
    })
})

//deleting an item from the cart
app.delete('/deletecart/:name',(req,res)=>{
    var name=req.params.name;
    mongoClient.connect(url,function(err,client){
        if(err) console.log(err);
        else{
            var db=client.db(dbname);
            db.collection('cart').deleteOne({name:{$eq:name}});
           // res.send();
        }
       
        client.close();
        console.log('Deleted document..with NAME-->',name);
    })
})



app.listen(3300,()=>{console.log("Pizzeria-Server Started Successfully at port 3300")})
