"use strict";

//==============================================================================
//              Route definitions for the server
//
//==============================================================================


var express = require('express');
var mymongo = require('./mongo/mymongo').mymongo();

 // get an instance of the express Router
 var router = express.Router();

// test route to make sure everything is working
router.get('/test', function(req, res) {
    res.json({ message: 'hooray! router was correctly configured !' });
});

// Test mongo status
router.get('/status', (req,res) => {
    mymongo.status(  (stat) => {
        res.json(stat);
    }   );
});



// more routes for our API will happen here
// .....


//==============================================================================
// Exporting the router object

exports.myrouter = function() {
  return router;
}
