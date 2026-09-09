let arr = [1,2,3,4,5];

let doubleArray = arr.map(function(ele){
    let double = ele*2;
    return double;
})
console.log(arr);
console.log(doubleArray);

let oddelement = arr.map(function(s){
    if(s%2 != 0)
    return s;
})
console.log(oddelement)
// Map property :- It never change array length. map can change the element of an array 

//filter : - it change array length but do not change the element of an array.

let oddelement2= arr.filter(function(s2){
    if(s2%2 != 0 ) return s2;
})
console.log(oddelement2);