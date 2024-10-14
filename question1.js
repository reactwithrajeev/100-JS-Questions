//* Qn1: Find largest word of an array string.

let arr = ['my name is rajeev kumar', 'i am a frontend developer'];

let newArr = arr.flatMap((str)=> str.split(" "));
// console.log(newArr)

let largestWord = newArr.reduce((acc,word)=>{
    console.log(acc.length)
    return acc.length > word.length?acc:word;
    
    
},'')

console.log(largestWord)