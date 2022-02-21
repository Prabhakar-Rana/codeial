module.exports.home = function (req, res) {
    console.log('show cookies');
    console.log(req.cookies);
    res.cookie('userwe',25);
    res.render('home',{
       title : "Home"
    });
}
