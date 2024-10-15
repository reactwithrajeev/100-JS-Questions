// * Qn : Create a hashtag genrator function which genrate hashtags from given string 



// "my name is rajeev kumar";
// Output : #MyNameIsRajeevkumar


let hashtagGenerator = (str)=>{

    str = str.split(' ');

    str = str.map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    })

    str = `#${str.join('')}`;
    return str;

}

console.log(hashtagGenerator('my name is rajeev kumar'))

// output : #MyNameIsRajeevKumar;