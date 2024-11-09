//QN19 Check if a string starts with given substring or not.

let checkString = (str,subStr)=>{
    str = str.toLowerCase();
    subStr = subStr.toLowerCase();
    if(str.startsWith(subStr)){
        return true
    }
    return false
}
console.log(checkString("Rajeev","aj"));