//Qn17 covert a given string to camelCase 

let toCamelCase =(str)=>{

    str = str.trim().toLowerCase()
    console.log(str)
    str = str.split(" ").map((word,index)=>{
        if(index === 0){
            return word
        }
        else{
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }).join("")

    return str

}

console.log(toCamelCase('Hello world Rajeev'))
console.log(toCamelCase('react wiTh raJEEv'))