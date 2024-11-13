//Qn22 Counting Frequency of Elements in an Array with JavaScript ;

let countFrequency = (arr)=>{
    let frequency = {};
    arr.forEach((val)=>{
        if(frequency[val]   ){
            frequency[val]++;
        }else{
            frequency[val] = 1;
        }
    })
    return frequency;
}

console.log(countFrequency([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]));