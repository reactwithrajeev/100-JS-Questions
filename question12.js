// Qn12: Remove duplicate elements from an array

const { set } = require("express/lib/application")

let removeDuplicates = (arr)=>{

    arr= arr.filter((val,index)=>{
        return arr.indexOf(val)===index
    })
    return arr

}

console.log(removeDuplicates([1,5,2,3,4,5,4,6,2]))

let anotherMethod = (arr)=>{

    arr = new Set(arr)
    return [...arr];

}

console.log(anotherMethod([1,2,3,4,2,1,5]))