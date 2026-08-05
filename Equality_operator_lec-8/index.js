console.log("1" == 1); //true
console.log("a" == 2); //false
console.log(" " == 0); //true
console.log("    " == 0); //true
console.log(" " == ""); //false
console.log([] == ""); //true
console.log(["a"] == "a"); //true
console.log([] == "   ");//false
console.log({}== 0); //false
console.log(undefined == 0); //false
console.log(true == 0);//false


console.log([]==[]); //false

console.log(+"6" + "55"); //655
console.log(+"6" + 55); //61
console.log(55 + +[1]+ +"6");

