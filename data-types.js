let a = '5';
let b = 4;
let c = true;

console.log(`String plus boolean: ${a + c}`);
console.log(`String plus number: ${a+b}`);
console.log(`Nuber plus boolean: ${b+c}`);
console.log(`String multiply by boolean: ${a * c}`);
console.log(`String multiply by number: ${a * b}`);
console.log(`Number multiply by boolean: ${b * c}`);
console.log(`String divided by boolean: ${a / c}`);
console.log(`String divided by number: ${a / b}`);
console.log(`Number divided by boolean: ${b / c}`);

a = Number(a);
b = Boolean(b);
c = String(c);

console.log(`Numeric conversion: ` + typeof a);
console.log(`Boolean conversion: ` + typeof b);
console.log(`String conversion: ` + typeof c);