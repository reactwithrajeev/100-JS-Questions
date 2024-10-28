//Qn7: Find Largest value in an array elements;

let findLargestVal = (arr)=>{

    let largestVal = arr.reduce((acc,val)=>{
        return acc>val?acc:val;

    })
    return largestVal
}

console.log(findLargestVal([1,5,7,8,9,4,6,3]))
console.log(findLargestVal([1,58,7,88,98,45,68,3]))