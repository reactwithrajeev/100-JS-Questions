// Qn15 Find sum of squares of given number

let sumOfSquare = (num)=>{

    let totalSum = num.toString().split('').reduce((acc, val)=>{
        return acc + (val*val)
    },0)

    return totalSum

}

console.log(sumOfSquare(1234))