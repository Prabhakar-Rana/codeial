module.exports.home = function (req, res) {
   //console.log('show cookies');
   res.cookie('userid',25);
   console.log(req.cookies);
    return res.render('home',{
       title : "Home"
    });
}
