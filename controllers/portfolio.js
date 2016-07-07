var express = require('express');
var router = express.Router();

router.get("/project-a", function(req, res){
	console.log("I am working!");
	// res.send(user);
});

module.exports = router;