// set time out :- it a function that is used to delay the execution of a function by 
// a specified amount of time. 

console.log("start");
setTimeout(function(){
    console.log("work to do");
}, 1000);

setTimeout(function(){
    console.log("timeout 2");
}, 500);
console.log("end");

setTimeout(function(){
    console.log("timeout 3");
}, 200);
console.log("hi");
setTimeout(function(){
    console.log("timeout 4");
}, 1500);

console.log("end");