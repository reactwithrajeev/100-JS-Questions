//Qn14 : check is the number given is powrr of two?



let powerOftwo = (num)=>{
    if(num<1){
        return false;
    }
     
    while(num!=1){
        if(num%2!==0){
            return false
        }
        num = num/2
    }
    return true;
}

console.log(powerOftwo(8))
console.log(powerOftwo(6))