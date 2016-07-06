var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	console.log("I am working!");
	// res.render('index.html');
});

module.exports = router;