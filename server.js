//grab express
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


//configure instagram app with client id 

ig.use({
	client_id: 'e0e51c60672c4f09abe28c46c71a3a7a',
client_secret: 'db11c575a8ae4f1aa90a03ba1d1345d8'
});



app.get('/', function(req,res){
	//use the ig package to get popular media
	ig.media_popular(function(err, medias, remaining, limit){

	//render the home page and pass in the popular images
	res.render('pages/index', { grams: medias});
	});
});

app.listen(8080);
console.log('App started, look at 8080 jawn');