// set time out :- it a function that is used to delay the execution of a function by 
// a specified amount of time. 

// console.log("start");
// setTimeout(function(){
//     console.log("work to do");
// }, 1000);

// setTimeout(function(){
//     console.log("timeout 2");
// }, 500);
// console.log("end");

// setTimeout(function(){
//     console.log("timeout 3");
// }, 200);
// console.log("hi");
// setTimeout(function(){
//     console.log("timeout 4");
// }, 1500);

// console.log("end");

// set interval :- it is a function that is used to execute a function repeatedly 
// at a specified interval of time.
let id3 = setInterval(function(){
    console.log("Hello");
}, 1000);

setTimeout(function(){
    clearInterval(id3);
}, 5000);

// different between asynchronous and synchronous programming :-
// Note :- java script is a single threaded programming language. it means that it can only execute one task at a time.
// so that js is a synchronous programming language in nature.it is blocking in nature. 

