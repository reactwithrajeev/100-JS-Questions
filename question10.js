//Qn10: Compare two array are equal or not

let compareArray = (arr1,arr2)=>{

    if(arr1.length!==arr2.length){
        return false
    }

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;


}

console.log(compareArray([1,2,3,4],[1,2,3,4]))
console.log(compareArray([1,2,3,4],[1,2,5,4]))
console.log(compareArray([1,2,3,4],[1,2]))
console.log(compareArray([],[]))