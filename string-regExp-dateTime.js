// Given the string 'ahb acb aeb aeeb adcb axeb'. 
// Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

let str = 'ahb acb aeb aeeb adcb axeb';
let result = str.match(/a.b/g);
console.log(result); 

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let str1 = '2 + 3 223 2223';
let regex = /^2 \+ 3/;
let result1 = str1.match(regex);
console.log(result1); 

// Get the day, month and year of the current date and output it to the console separately

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

console.log('Day:', day);
console.log('Month:', month);
console.log('Year:', year);