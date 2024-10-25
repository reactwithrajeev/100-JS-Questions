// Qn6: Check if word or a phrase is a palindrome

let isPalindrome = (str)=>{

    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    console.log(cleanedStr)
    let reversedStr = cleanedStr.split("").reverse().join("");
    return reversedStr === cleanedStr

}

console.log(isPalindrome("Racerecar"));
console.log(isPalindrome("@Racerecar/"));
console.log(isPalindrome("@Rajeev/"));