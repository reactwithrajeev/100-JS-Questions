//Qn27 Find intersection of two arrays

let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];

let intersection = arr1.filter(value=>arr2.includes(value));
console.log(intersection)
