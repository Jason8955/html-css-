//Print Values and Sum

//Print each array value and the sum so far
//The expected output will be: 


var testArr = [6,3,5,1,2,4]
var sum =0
for ( i=0; i < testArr.length; i++){
    sum += testArr[i]
    console.log(`Num: ${testArr[i]} Sum: ${sum}`)
}






//Value * Position

//Multiply each value in the array by its array position
//The expected output will be:


var testArr = [6,3,5,1,2,4]
var sum =0
for ( i=0; i < testArr.length; i++){
    sum= i * testArr[i]
    console.log(` Sum: ${sum}`)
}
