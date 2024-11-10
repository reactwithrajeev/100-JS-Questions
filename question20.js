//Qn20 Reverse a string without using inbuilt function.

let revereseStr = (str)=>{
    let revStr ='';
    for(let i = str.length-1;i>=0;i--){
        revStr += str[i];
    }
    return revStr;

}

console.log(revereseStr("Rajeev"));