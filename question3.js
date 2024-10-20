//* QN3: find number of time a charcter APPEARED IN A GIVEN STRING USING A FUNCTION


let countCharacter = (word, char)=>{
    word= word.toLowerCase();
    char= char.toLowerCase();

    let totalCount= word.split("").reduce((acc, charVal)=>{
        if(charVal === char){
            acc++;
        }
        return acc
    },0)
    return totalCount

}

console.log(countCharacter("HanmariaKApimaajimAA", 'p'))