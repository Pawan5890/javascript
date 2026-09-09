//how to add and get element in array
//1. Using index
let arr = [2,20,30,40,50,60,70,80,90,100]
//setting value at index 4
arr[4] = 10 
console.log(arr)
console.log(arr.length);


//how to access any value in javascript array
//using index
//get
let val = arr[7] //undefined
console.log(val) 

//2. Using push and pop method
//push method is used to add element at the end of array
arr.push(9)
console.log(arr)
//get last element of array
//pass length of array -1 as index to get last element
let lastElement = arr[arr.length-1]
console.log(lastElement)

//pop method is used to remove last element of array
let removedElement = arr.pop()
console.log(arr)


//3. Using unshift and shift method
//unshift method is used to add element at the start of array
arr.unshift(1)
console.log(arr)
arr.shift() //remove first element of array
console.log(arr)

//how to remove element at any index
//using splice method
arr.splice(3,1) //remove 1 element at index 3
console.log(arr)
arr.splice(3)
console.log(arr)

let arr1 = [10,20,30]
let value = arr1.slice(1,2)
console.log(value) //start index include but exclude end index