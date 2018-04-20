var fs = require("fs");

var writeableStrem = fs.createWriteStream("hello.txt");
writeableStrem.write("hello world \n");
writeableStrem.write("Writing file running \n");
writeableStrem.write("writing file finished");

var readableStream = fs.createReadStream("hello.txt","utf8");
readableStream.on("data",function(chunk){
    console.log(chunk)
})


