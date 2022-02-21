const User = require('../models/user');
module.exports.profile = function (req, res){
   res.render("user_profile", {
     title: "user_profile",
   });
  }
module.exports.signUp=function (req,res){
    res.render("user_sign_up",{
        title : "Sign Up"
    })
} 
module.exports.signIn=function (req,res){
    res.render("user_sign_in",{
         title : "Sign In"
    })
} 
console.log('hi i am prabhakar !');
module.exports.create=function(req,res){
    if(req.body.password !=req.body.confirm_password){
        res.render('back');
    }
    User.findOne({email : req.body.email},function(err,user){
          if(err){
            console.log('error in finding user in signup');
            return;  
          }
          if(!user){
            User.create(req.body,function(err,user){
             
                 if(err){
            console.log('error in creating user while signup');
            return; 
              }
              return res.redirect('/users/signIn');
            })
          }
          else{
            return res.redirect('back');
          }
    })
}
   