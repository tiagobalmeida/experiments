var fs = require("fs");

const fileReader = function(err, sData){
    if (!err) {
        console.log(sData.split("\n").length - 1);
    }
};

var buffer = fs.readFile(process.argv[2], "utf-8", fileReader); // by passing utf8 here, data in the fileReader will be a string

