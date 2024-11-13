//Qn21 Find second largest number in an array.

let secondLargest = (arr)=>{
    let maxVal = Math.max(...arr);
    let filteredArr = arr.filter((val)=>val!=maxVal);
    let secondMaxVal = Math.max(...filteredArr);
    return secondMaxVal;


}

console.log(secondLargest([1,2,3,4,5,6,7,8,9]));