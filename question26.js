//Qn 26 Repeat the string till given number of times

let repeatString = (str,num)=>{
    // return str.repeat(num)
    let repeatedStr = "";
    for(let i=0;i<num;i++){
        repeatedStr += str;
    }
    return repeatedStr;
}

console.log(repeatString("rajeev",3))