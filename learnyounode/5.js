// Filtered LS

var fs = require("fs");
var path = require("path");

// The fs.readdir() method takes a pathname as its first argument and a  
//   callback as its second. The callback signature is:  
   
//      function callback (err, list) { /* ... */ }  
   
//   where list is an array of filename strings.  
   
//   Documentation on the fs module can be found by pointing your browser here:  
//   file:///home/tiago/node_modules/learnyounode/node_apidoc/fs.html  
   
//   You may also find node's path module helpful, particularly the extname  
//   method.

const listFiltered = function(sPath, sExtension){
    fs.readdir(sPath, function(err, list) {
        if (err) {
            console.error(err);
            return;
        }
        for ( var i=0 ; i<list.length ; i++) {
            if (path.extname(list[i]) === "." + sExtension) {
                console.log(list[i]);
            }
        }
    });
}

listFiltered(process.argv[2], process.argv[3]);
