Predict 1:

function greeting(){
    return "Hello"; // log Hello
 console.log('World'); // cannot be ran after the function is returned
}

var word = greeting();
console.log(word);//only logs Hello due to the function ending



Predict 2: 

function add(num1, num2){
    console.log("Summing Numbers!");// log summing numbers!
    console.log("num1 is: " + num1); // 3 r2 4
    console.log("num2 is: " + num2);// 5 r2 7
    var sum = num1 + num2;// 3+5  r2 7+4
    return sum; //8  11 
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1); //8
console.log(result2); // 11





Predict 3: 

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
} // function is never called with any parameters 