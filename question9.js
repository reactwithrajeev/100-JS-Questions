// QN9: Find average of an array ememnts;

let findAverage = (arr)=>{
    let totalSum = arr.reduce((acc,val)=>{
        return acc+val;
    })

    return totalSum/arr.length;
}

console.log(findAverage([2,4]))