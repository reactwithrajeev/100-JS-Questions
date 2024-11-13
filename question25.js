//Qn25 Find Fibbonaci series on given position

let createFibbonaci = (num)=>{
    if(num<=0){
        return 0;
    }
    if(num===1){
        return 1;
    }
    let fibbonaci = [0,1];
    for(let i=2;i<=num;i++){
        fibbonaci.push(fibbonaci[i-1]+fibbonaci[i-2]);
    }
    return fibbonaci;
}

console.log(createFibbonaci(5));
