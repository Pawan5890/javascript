// //1.funtion ko variable me store kar skte hai
// //function declaration
// function fool(){

// }
// console.log(fun);
// fun();//error: fun is not a function
// //function expression
// var fun = function(){
//     console.log('hello');
// }
// fun();
// function fun(a,b){
//     console.log(a+b);
//     //return a+b;
// }
// function foo(a){
//     console.log(a);
//     //a(2,3);
//     return fun
// }
// //foo(function(){});//annonymous function
// //foo(fun(2,3));
// let result=foo(10);
// console.log(result)
function foo1(cb){
    return cb;
}
function fun1(){
    console.log("hello")
}
let result=foo1(fun1);
result()
//Higher order function is a function which takes another 
// function as an argument or return a function.
