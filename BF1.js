//Basic Foundation 1

//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function get_array() {
    var arr = [];
    for(var i=1; i<256; i++){
        arr.push(i);
    }
    return arr; 
};
console.log(get_array(256))


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sum_even(){
    var sum = 0;
   for(var i=0; i<=1000; i+=2) {
    if(i % 2 === 0){
      sum += i;
        
    }
   } 
    return sum; 
};
console.log(sum_even(1000))

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.

function sum_odd() {
    var sum = 0;
for(var i=0; i<=5000; i++) {
    if(i % 2 === 1){
      sum += i;
    }
}
    return sum; 
};
console.log(sum_odd(5000))
//Iterate an array - Write a function that returns the sum of all the values within an array.

function iterArr(arr) {
   
    var sum=0;
    for(var i=0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum; 
};
console.log(iterArr([1,2,3]))

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array.

function findMax(arr) {
    var max = arr[0];
    for(var i=1; i < arr.length; i++){
       if(max < arr[i])
        max = arr[i];
    }
    
    return max; 
};
console.log(findMax([2,4,6]))

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array
function findAvg(arr) {
    var total =0;
    for(var i=0; i<arr.length;i++){
        total += arr[i];
    
        var avg = total/arr.length;
    }
    
    
    return avg; 
}
console.log(findAvg([2,4,6,8,10]))

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddNumbers() {
    var arr = [];
    for(var i=1; i < 50; i++){
        if(i % 2 !== 0 ){
            arr.push(i);
        }
    }
    return arr; 
}
console.log(oddNumbers(50))

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
function greaterY(arr, Y) {
    var count= 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > Y){
        count = count + 1;
        }
    }
    return count; 
}
console.log(greaterY([1,2,5], 1)) //example

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
function squareVal(arr) {
    arr.forEach(function(elem,i, arr){
       arr[i] = elem*elem;
    });
   return arr; 
}
console.log(squareVal([1,2,3])) //example

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values.

function noNeg(arr) {
    for(var i=0; i < arr.length; i++){
        if(arr[i] < 0 ){
         arr[i] = 0}
    } 
    return arr; 
}
console.log(noNeg([-1,4,5,2,-2,-3])) //example

//  Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array.
 
function maxMinAvg(arr) {
    var arrnew=[];
    var sum = 0;
    arr.forEach(function(elem){
        sum += elem;
    });
    arrnew.push(Math.max.apply(null,arr));
    arrnew.push(Math.min.apply(null,arr));
    arrnew.push(sum/arr.length);
    return arrnew; 
}
console.log(maxMinAvg([1,5,10,-2])) //example

// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr; 
}
console.log(swap([1,5,10,-2]))

//Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToStr(arr) {
    arr = arr.map(function(elem){
   if (elem<0){
    return 'Dojo';
   } else {
    return elem;
   }
  });
  return arr;
 }
 console.log(numToStr([-1,-3,2]))

