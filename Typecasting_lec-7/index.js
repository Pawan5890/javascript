let num1 = "10";
let num2 = Number(num1);
console.log(typeof num1);
console.log(typeof num2);
//logic ==> num ki value bhejoge usme mein 10 increment kar k return krunga
function Increament(num){
    return num + 10;
}
let result = Increament(num1);
console.log(result);
console.log(num2 + 10);

//expectation ==> 20 but actual ==> 1010
let arr = [];
// console.log(Number(arr));
// console.log(Number(""));
// console.log(Number("   "));
// console.log(Number("...."));
console.log(Number({}));
console.log(Number([1]));
console.log(Number([1,2]));
console.log(String([]));
console.log(String([1,2]));
console.log(Number(["1,2"]));

console.log(String({}));