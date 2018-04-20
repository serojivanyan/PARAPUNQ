var fs = require("fs");
var zlib = require("zlib");

var readableStream = fs.createReadStream("hello.txt","utf8");
var writeableStream = fs.createWriteStream("some.txt.gz")
readableStream.pipe(writeableStream);
var gzip = zlib.createGzip();
 readableStream.pipe(gzip).pipe(writeableStream)


