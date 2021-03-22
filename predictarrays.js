Predict 1: 

var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
   //0 < 7  
   //0=8,  1=6, 2=7, 3=5, 4=3, 5=0, 6=9
   
    console.log(arr[i]);
    // the console simply prints out the array in order, sense there are no other directions in the set.
    //[8,6,7,5,3,0,9]

}


Predict 2:

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    // 0 < 7

    if(arr[i] % 2 == 0){ // all odd numbers will go to the else statement and equal that is odd. all even numbers in the array will be logged to the array as its self (and zero)
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    } // that is odd, that is odd, 8, 4, 2, 0, that is odd
}




Predict 3:

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    //0 < 8
    if(arr[i] < 0){ // if the array is less than 0 add number to newArr then finish the if statement. so -5 =5, -2 = 2 and =1 = 1.
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){ // if array = 0 than print string of 'Zero' into main array in its place
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1; // if neither of above apply, all postive numbers are turned into negative numbers.
    }
}
console.log(arr);
//-1, -3, -8 , 5, zero , 2 , -4 ,1
console.log(newArr);
//-5 , -2 ,-1 