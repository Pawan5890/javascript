let arr = [1,2,3,4,5];
let sum = 0;
for(let i = 0 ; i<arr.length;i++){
    sum = sum + arr[i];
}
console.log(sum);

let sum2 = arr.reduce(function(acc , curr){
    return acc+curr;
},0)
console.log(sum2);

//return multiplication of array

let multi = arr.reduce(function(acc,curr){
    return acc*curr;
},1)//if initial is not pass than acc= arr ka first element ( 0 index)
//curr = second element se loop start hota hai (1st index)
console.log(multi);


