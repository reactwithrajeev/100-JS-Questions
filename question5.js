// Qn5: convert an array elements in acceing and decending order

let arr = [5,7,8,4,1,3,5,9];

let sortedArr= arr.sort((a,b)=> a-b)
let sortedArr2= arr.sort((a,b)=> b-a)

console.log(sortedArr)
console.log(sortedArr2)