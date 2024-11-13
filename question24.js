//Qn24 Calculate factorials using recursion

let calFactorials = (num)=>{
    if(num===0){
        return 1;
    }
    return num * calFactorials(num-1);

}

console.log(calFactorials(5));