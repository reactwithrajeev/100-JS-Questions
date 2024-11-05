//Qn13: Find number of vowels present in a string

let vowel = ['a','e','i','o','u','A','E','I','O','U'];

let findVowels = (str)=>{
    let totalVowel = [...str].filter((char)=>{
        return vowel.includes(char)
    })
    console.log(totalVowel)
    return totalVowel.length
}

console.log(findVowels("Hello Guys My Name is RajEev Kumaar"))


