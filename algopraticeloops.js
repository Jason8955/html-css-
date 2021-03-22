// print odds 1-20

for(i=1; i <=20; i++){

if(i % 2 == 1){
    console.log(i)
}

}

//console: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19



//sum and print 1-5
var testArr = [1,2,3,4,5]
var sum =0
for ( i=0; i < 5; i++){
    sum= i+ testArr[i]
    console.log(`Num: ${i} Sum: ${sum}`)
}