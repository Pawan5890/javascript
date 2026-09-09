// 1. Index
let nums = [5, 15, 25, 35, 45, 55, 65, 75];

nums[3] = 99; 
console.log(nums);
console.log(nums.length);

let val = nums[5]; 
console.log(val); 


// 2. push
nums.push(100);
console.log(nums); 

let lastElement = nums[nums.length - 1];
console.log(lastElement); 


// 3. pop
let removedElement = nums.pop();
console.log(nums); 


// 4. unshift
nums.unshift(1);
console.log(nums); 


// 5. shift
nums.shift(); 
console.log(nums); 


// 6. splice
nums.splice(2, 1); 
console.log(nums); 

nums.splice(4);
console.log(nums); 


// 7. slice
let nums2 = [11, 22, 33, 44, 55];
let slicedVal = nums2.slice(1, 3);
console.log(slicedVal);