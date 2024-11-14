// QN 28 Rotate an array by given steps

let array = [1,2,3,4,5,6];

let rotateArr = (arr,steps)=>{
    //  steps = steps%arr.length;
    let rotatedArr = [];

    for(let i=0;i<arr.length;i++){
        let newPos = (i+steps)%arr.length
        rotatedArr[newPos]= arr[i];
    }
    return rotatedArr

}

console.log(rotateArr(array,7))