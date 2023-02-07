// Given an array consisting of movie names, 
// iterate over the array with the output of the names of each movie to the console

const arr = ["The holiday", 
"Forrest Gump", 
"Seven Pounds", 
"English patient", 
"The king speaks!", 
"Cards, money, two barrels"];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
};

// Given an array of car manufacturers, convert the array to a string and back to an array

const arr1 = ["BMW", "Ford", "Honda", "Volkswagen", "General Motors", "Toyota", "Tesla"];

let string  = arr1.join(" ");
console.log(string);

let newArray = string.split(" ");
console.log (newArray);

// Given an array of the names of your friends, add the words hello to each element of the array

const arr2 = ["Olga", "Tatiana", "Darya", "Zhenya", "Zhanna", "Ira"];
 
arr2.forEach((value) => {
    return console.log(`Hello ${value}!`);
});

// Convert numeric array to Boolean

const arrNumber = [0, 5, 10, 90, 5, 0, 18, 1000];
const arrBoolean = arrNumber.map(Boolean);
console.log(arrBoolean);

// Sort the array [1,6,7,8,3,4,5,6] in descending order

const arrNumber2 = [1, 6, 7, 8, 3, 4, 5, 6];
console.log(arrNumber2.sort((a, b) => b-a));

// Filter array [1,6,7,8,3,4,5,6] by value> 3

const arrNum = [1,6,7,8,3,4,5,6];
console.log(arrNum.filter((el => el > 3)));

// Write a function that takes two parameters 
// - an array and a number and outputs the index of an array element equal to a number

function elementSearch (arr, num) {
   return arr.findIndex(el => el == num);
};
console.log(elementSearch([2,3,4,6,7,4,8], 7));


// Implement a loop that will print the number 'a' until it is less than 10

let a = 0;
while (a < 10) {
    console.log(a);
    a++;
};

// Implement a loop that prints prime numbers to the console

function isPrime (b) {
    return b !== 1 && (b === 2 || b % 2 !== 0);
};

let b = 10;
for (let i = 1; i <= b; i++) {
    if(isPrime (i)) console.log(i);
};

// Implement a loop that prints odd numbers to the console

for(let i = 1; i <= 10; i++) {
  if(i % 2 === 0) continue;

  console.log(i);
};