/**
 * Created by meo on 4/12/2017.
 */
var express = require("express");
var app = express();
app.use("/images", express.static(__dirname + '/images'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));

app.use("/albums.html", express.static(__dirname + '/albums.html'));
app.use("/about.html", express.static(__dirname + '/about.html'));
app.use("/blog.html", express.static(__dirname + '/blog.html'));
app.use("/home.html", express.static(__dirname + '/home.html'));
<<<<<<< HEAD
var path=require("path") //assuming express is installed
//connect database
var flag=true;
/////////////////////////
var pg=require('pg');
pg.defaults.ssl = true;
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
app.post('/postdata', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body.data1);
    console.log(req.body.data2);
    console.log(req.body.data3);
    pg.connect("postgres://rwqofhotvaiztw:189237b5372f6aa2d15585cd06b0a0224d86c2cd3bef54e048ca2b55c2f60a6b@ec2-23-23-111-171.compute-1.amazonaws.com:5432/d8orgaldunjm6c", function (err, client) {
        if (err) throw err;
        console.log('Connected to postgres get! Getting schemas...');
        var str=parseInt(req.body.data1);
        var increase=
            console.log('number'+str);
        var query="update albums set data='{"+req.body.data3+"}' where author='albums"+req.body.data2+"'";
        console.log(query);
        client.query(query, function (err, result) {
            //done(err);
            if(err){
                return err;
            }
            console.log("update sucess");

        });

    });

});



///////////////////////////////////////

    app.get('/getdata', function (req, res) {
        pg.connect("postgres://rwqofhotvaiztw:189237b5372f6aa2d15585cd06b0a0224d86c2cd3bef54e048ca2b55c2f60a6b@ec2-23-23-111-171.compute-1.amazonaws.com:5432/d8orgaldunjm6c", function (err, client) {
            if (err) throw err;
            console.log('Connected to postgres get! Getting schemas...');

            client.query('select * from albums', function (err, result) {
                //done(err);
                if (err) {
                    console.log("error get");
                    console.log("meo");
                }
                var data = {};
                //console.log("this is get");
                console.log(result.rows[0].author.length);
                console.log(result.rows[1].author.length);
                console.log(result.rows[2].author.length);
                for(i=0;i<3;i++){
                    if(result.rows[i].author.indexOf('albums1')>-1){

                    data.data1=result.rows[i].data;
                    }
                }
                for(i=0;i<3;i++){
                    if(result.rows[i].author.indexOf('albums2')>-1){

                        data.data2=result.rows[i].data;
                    }
                }
                for(i=0;i<3;i++){
                    if(result.rows[i].author.indexOf('albums3')>-1){
                       /// console.log("123123");
                        data.data3=result.rows[i].data;
                    }
                }
                console.log(data.data1);
                console.log(data.data2);
                console.log(data.data3);
                res.send(data);

            });

        });

    });

///////////////////////////////////////


///////////////////////////
app.get('/', function(req, res){
    res.sendFile(__dirname+"/home.html");
=======
app.use("/ilovefoodblog.html", express.static(__dirname + '/ilovefoodblog.html'));
app.use("/nhatrangblog.html", express.static(__dirname + '/nhatrangblog.html'));
app.use("/quynhoncityblog.html", express.static(__dirname + '/quynhoncityblog.html'));

var path = require("path") //assuming express is installed

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/home.html");
>>>>>>> 0e88b2f02946f38ae39aba8f968677c42da580f9
});
app.listen(3000, function () {
    console.log("connect");
})

