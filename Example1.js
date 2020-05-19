let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstNumber, secondNumber;

readline.question("Enter First Number:\n", (input) => {
    firstNumber = input;
    readline.question("Enter Second Number:\n", (input) => {
        secondNumber = input;
        add(firstNumber, secondNumber);
        sub(firstNumber, secondNumber);
        multiply(firstNumber, secondNumber);
        readline.close();
    });  
});


//ES5 Syntex: function (keyword) name(argc) {}
function add(num1, num2) {
    console.log(parseInt(num1)+parseInt(num2));
} 

//ES6 Syntex: varname = function(argc) {};
var sub = function(num1, num2) {
    console.log(num1 - num2);
};

//ES2015: name = (args) => {};
multiply = (num1, num2) => {
    console.log(num1 * num2);
};
