const Post = require("../models/post");
module.exports.home = function (req, res) {
  //console.log('show cookies');
  //res.cookie("userid", 25);
   Post.find({})
     .populate("user")
     .exec(function (err, posts) {
        if(err){
           console.log('error found',err);
        }
       return res.render("home", {
         title: "Codeial | Home",
         posts: posts
       });
     });
  
};
