Predict 1: 

for(var num = 0; num < 15; num++){  
    // 0 < 15 , +1 
    
    console.log(num);
}// 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14


Predict 2:

for(var i = 1; i < 10; i+=2){
   // 1 < 10 ....+2
    if(i % 3 == 0){ //0 , 2 ,4 , 6 , 8
        //log if 0 == 0 only
        console.log(i);
        //3,9 ----- only two numbers with no remainder when divied by 3(aka modulus 3)
    }
}


Predict 3:

for(var j = 1; j <= 15; j++){ // 1, 4, 5, 8, 10, 11, 14, 16
   // 1 <= 15....+1              1, 2  4  6,  8  ,10  14
    if(j % 2 == 0){
        //if the reamineder = 0 then add 2 
         j+=2;
    }
    else if(j % 3 == 0){
        j++;
    // if not if %2 equals 0 add 1.
    
    
    
    }

    console.log(j);
} // 1, 4, 5, 8, 10, 11, 14, 16