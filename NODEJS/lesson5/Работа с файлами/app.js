// var fs = require("fs");


// var fileContent = fs.readFileSync("hello.txt","utf8")
// console.log(fileContent)






// асинхронное чтение
var fs = require("fs");

// fs.readFile("hello.txt","utf8",function(error,data){
//         console.log("Asyncronno reading file");
//         if(error){
//             throw error
//         }
//         console.log(data);
// })




// // синхронное чтение

// console.log("Syncronno reading file");

// var fileContent = fs.readFileSync("hello.txt","utf8");
// console.log(fileContent)


// fs.writeFile("hello.txt","good bye node js",function(err,data){
//     console.log("async write file");
//     if(err) throw err;
//     console.log(data)
// });



fs.appendFileSync("hello.txt","hello node js")

var fileContent = fs.readFileSync("hello.txt","utf8");
console.log(fileContent)
