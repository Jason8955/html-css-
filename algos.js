// Generate Coin Change
// Change is inevitable (especially when breaking a
// twenty). Make generateCoinChange(cents).
// Accept a number of American cents, compute
// and print how to represent that amount with
// smallest number of coins. Common American
// coins are pennies (1 cent), nickels (5 cents),
// dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4

// What would you do in front of a register to make change?
// Write the pseudocode!

// Highly suggest trying to make it work for 1 quarter first: can you make 1 quarter (25) in change?

// Second: can you simplify/shorten your code? (Don't erase what you have, work on a copy.)

// Third: add half-dollar (50 cents) and dollar (100
// cents) coins with 40 additional characters or less.


function generateCoinChange(cents){
    var quaters = 0;
    var dimes = 0;
    var pennies = 0;
    var nickels =0;
    while(cents >= 25){
        quaters++;
        cents -=25;
    }
    while(cents >= 10){
        dimes++;
        cents -=10;
    }
    while(cents >= 5){
        nickels++;
        cents -=5;
    }
    while(cents >= 1){
        pennies++;
        cents -=1;
    }
console.log(`quaters=${quaters} dimes=${dimes} nickels=${nickels} pennies=${pennies}`);

}
generateCoinChange(55);
generateCoinChange(33);
generateCoinChange(60);