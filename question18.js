//18 Check if the given string is in uppercase or lowercase ;

let isUpperCase = (str)=>{
    let uppCaseVal = /^[A-Z]+$/;
    if(uppCaseVal.test(str)){
        return true
    }
    return false

}

console.log(isUpperCase("HELLO"));