// task: Car
const car = {}

car.color = 'black';
car.color = 'green';

car.showMessage = () => {
    console.log('Engine power');
}

// task: Apple and Pears 
let apples = 250;
let pears = 400;

function sum(a, b) {
 return a + b;
}
console.log(sum(apples, pears));

// task: Name in the terminal
let userName;
userName = 'Kseniya';

function user(name) {
    if (name === 'Kseniya') {
        console.log( 'Hello,', name);
    } else {
        console.log ('There is no such name');
    }
}
user(userName);

//  task: type of argument
function calc(a) {
    return console.log(`Argument's type is `, typeof a);
}
calc(true);

// task: number is prime or not
function determinePrimes(n) {
    if(n < 2) {
        return 'Number must be greater than or equal two';
    } 
    if(n === 2) {
        return 'It is a prime number';
    }

    let i = 2;
    const limit = Math.sqrt(n);

    while(i <= limit) {
        if(n % i === 0) {
            return 'It is a composite number';
        } 
        i++;  
    } 

    return 'It is a prime number'
}
console.log(determinePrimes(2));