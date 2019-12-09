// var t = 1;

// var timer = setInterval(()=>{
//     if(t>5)
//         clearInterval(timer);
//     else
//         console.log(t++)
//     }
//     , 1000);

// var count = require("./count");

// console.log(count.counter(count.thing));

// var events = require("events");

// var myEmitter = new events.EventEmitter();

// myEmitter.on("myEvent", (msg, age)=>console.log(`${msg} for ${age} years`));

// myEmitter.emit("myEvent", "Have been waiting", 5);

/*lesson 9*/
// var events = require("events");
// var util = require("util");

// class Person extends events{
//     constructor(name){
//         super();
//         this.name= name;
//         this.on("speak", (msg, age)=>{
//             console.log(`${this.name} said: ${msg}\n I'm ${age} years old`);
//         });
//     }
// }

// var john = new Person("john");
// var dani = new Person("Dani");
// var deni = new Person("Deni");


// // const people = [john, dani, deni];

// // for (let person of people){
// //     person.on("speak", (msg, age)=>{
// //         console.log(`${person.name} said: ${msg}\n I'm ${age} years old`);
// //     });
// // }

// john.emit("speak", "Hi there!", 14);
// dani.emit("speak", "I love you", 15);
// deni.emit("speak", "I love you too", 16);

/*10 - read & write files*/
// var fs = require("fs");

// var msg = fs.readFileSync("texty.txt", 'utf8');
// console.log(msg);

// fs.writeFileSync('writy.txt', msg);

// fs.unlinkSync('writy.txt');
// try {
//     fs.unlinkSync('writy.txt');
// } catch (error) {
//     console.log("the file does not exist");
// }


// var done = false;
// fs.readFile('texty.txt', 'utf8', (_err, data)=>{
//     var msg = data;
//     console.log(msg);
// });

// fs.readFile("writy.txt", 'utf8', (_err, data)=>{
//     console.log('done reading second file');
// });
//this won't work
// while(!done);
// console.log(msg);

/* 12 creating a server */
// var http = require('http');
// var fs= require('fs');

// var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

// var server = http.createServer( (request, response) => {
//     response.writeHead(404, {'Content-Type': 'text/plain'});
//     //readStream.pipe(response);
//     response.end("Hi there");
// });


// server.listen(5500, 'localhost');
// console.log("Now listening to client requests");

/** 23 express */
var express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.send("<h1 style={color:#f00 !important}>Home pages</h1>");
});
app.get('/contact', (req, res)=>{
    res.sendFile(__dirname + "/contact.html");
});


app.listen(3000);

