module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/print',function(req,res){
        res.send('Hello World');
    });
}