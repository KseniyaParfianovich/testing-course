// In a try catch construction, wrap the code: console.log (a), let a = 3. 
// And display an error - ‘let must be declared’ before use. 
//
try {
    console.log(a);
    let a = 3;
} catch (error) {
    console.error("let must be declared");
};

//  When running 1/0, the error 'cannot be divided by zero'

try {
    const result = 1 / 0;
    if(result === Infinity) throw new Error("Cannot divide by zero");
} catch (error) {
    console.log(error.message);
};