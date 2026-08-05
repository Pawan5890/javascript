//There is no return type in function declaration

// function Function_Name() {
//     console.log("some work");
//     return 5;
// }
// let result = Function_Name(); //function call
// //console.log(Function_Name()); //function call with return value
// let x = result + 5;
// console.log(x);

function add(a,b){
    console.log(a+b);
    return a+b;
}
let out=add(5,2);
console.log(out); //7

//default parameters
function add1(a=2,b=3){
    console.log(a,b);
    return a+b;

}
let out1=add1();//if no value is passed then default value will be taken
console.log(out1); //5