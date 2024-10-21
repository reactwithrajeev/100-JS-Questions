// * Qn4 : write a function which tell the type of trngle according to its sides , is it equilateral , isosceles  or scalene type of trangle;

let findTriangleType = (a,b,c)=>{
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return 'Please enter valid numbers for the sides of the triangle';
    }
    if(a===b && b===c) {
        return 'This is a Equilateral Type Of Triangle'
    }else if (a===b || b===c || c===a){
        return 'this is a Isosceles Type Of Triangle'
    }
    return 'This is a Scalene Type Of Triangle'

}

console.log(findTriangleType(32,32,32))
console.log(findTriangleType(32,35,32))
console.log(findTriangleType(36,32,35))