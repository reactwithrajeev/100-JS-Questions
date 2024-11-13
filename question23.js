//Qn23 Find a missing number in a sequence



let findMissing = (arr)=>{
    arr.sort((a,b)=>a-b);
    let missingNumber = [];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]!==arr[i]+1){
            missingNumber.push(arr[i]+1);
        }
    }
    return missingNumber;
}

console.log(findMissing([1,2,3,4,6,7,9,10]));