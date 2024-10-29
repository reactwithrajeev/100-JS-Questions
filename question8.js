// QN8: Find factorial of a given number;

let findFactorial = (num)=>{
    let factorial = 1;

    for(let i =num; i>0; i--){
        factorial*=i;
    }

    return factorial

}

console.log(findFactorial(5))
console.log(findFactorial(2))
console.log(findFactorial(4))