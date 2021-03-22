// Array: Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new
// array containing the first array’s elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
// var arrX = ['a','b']
// var arrY = [1,2];


// function combo(arrX,arrY){
//     var xval = [...arrX...arrY];
//     return xval;
// }
// console.log(combo(arrX,arrY));



var arr1 = [1,2,3]
var arr2 = [2,3,4]
function combine(arr1,arr2){

let newArr =[]
for(var i=0; i< arr1.length; i++){
    newArr.push(arr1[i])
}
for (var i=0; i < arr2.length; i++){
    newArr.push(arr2[i])
}
console.log(combine(arr1,arr2))
}






// Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any
// elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5],
// change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.


// function minToFront(arr){
//     var min= arr[0];
//     var index = 0;
//     var newArr =[];
//     for(i=0; i<arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//             index = i;
//         }
//     }
//     newArr[0] = min;
//     var counter = 1;
//     for(i=0; i< arr.length; i++){
//         if(i !== index){
//             newArr[counter] = arr[i];
//             counter++;
//         }
//     }
// return arr;
// }
// var testArr = [4,2,1,3,5];
// console.log(minToFront(testArr));

function minToFront(arr){ //PERFERRED *******
    var minIdx= 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] < arr[minIdx]){
            minIdx = i;
        }
    }
    for(minIdx; minIdx > 0; minIdx--){
        var temp= arr[minIdx];
        arr[minIdx] = arr[minIdx-1];
        arr[minIdx-1] = temp;
    }
    return arr;
}
console.log(minToFront([5,4,1,9,3,11]));




















// BONUS:
// Array: Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method
// that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a
// given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function plutoNash(arr){ // WORKS WELL!!! 
    for(let i=0; i<arr.length; i++){
        var x=Math.floor((Math.random()*(i+1)))
        var temp=arr[i];
        arr[i]=arr[x];
        arr[x]=temp;
    }
    return arr;
}
console.log(plutoNash([11,2,32,4,5,6,7]));