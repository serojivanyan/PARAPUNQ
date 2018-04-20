// Эта функция принимает два параметра:

// request: хранит информацию о запросе

// response: управляет отправкой ответа

// Request
// Параметр request позволяет получить информацию о запросе и представляет объект http.IncomingMessage. Отметим некоторые основные свойства этого объекта:

// headers: возвращает заголовки запроса

// method: тип запроса (GET, POST, DELETE, PUT)

// url: представляет запрошенный адрес

// Например, определим следующий файл app.js:

var http = require("http");

http.createServer(function(request,response){

console.log(JSON.stringify(request.headers));
console.log(request.method +"request.method");
console.log(request.url+"request.url")

response.write("<h1>Hello node js</h1>")
response.end();
}).listen(3000);