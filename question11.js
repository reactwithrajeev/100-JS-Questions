//Qn11: Sum the digitas of a given number

let sumOfDigits = (num)=>{

    let totalSum = num.toString().split("").reduce((acc,val)=>{
        return acc+parseInt(val)
    },0)
    return totalSum

}

console.log(sumOfDigits(12345))