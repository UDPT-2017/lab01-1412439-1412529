/**
 * Created by meo on 4/12/2017.
 */
var express = require("express");
var app = express();
app.use("/images", express.static(__dirname + '/images'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/js", express.static(__dirname + '/js'));

app.use("/albums.html", express.static(__dirname + '/albums.html'));
app.use("/about.html", express.static(__dirname + '/about.html'));
app.use("/blog.html", express.static(__dirname + '/blog.html'));
app.use("/home.html", express.static(__dirname + '/home.html'));
app.use("/ilovefoodblog.html", express.static(__dirname + '/ilovefoodblog.html'));
app.use("/nhatrangblog.html", express.static(__dirname + '/nhatrangblog.html'));
app.use("/quynhoncityblog.html", express.static(__dirname + '/quynhoncityblog.html'));
app.use("/login.html", express.static(__dirname + '/login.html'));

var path = require("path") //assuming express is installed

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/home.html");
});
app.listen(3000, function () {
    console.log("connect");
})