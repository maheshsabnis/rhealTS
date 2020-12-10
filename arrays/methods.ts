// # using array methodss

let names = ["james bond", "indiana jones", "ethan hunt", "jason bourn", "john rambo", "terminator"];

// iterate over names
// forEach() function accepts callback funciton
// the address of 'printValues' is passed to forEach() function
names.forEach(printValues);
// the explictly used callback functions
function printValues(v:string, idx:number) {
    console.log('value at ' + idx + ' = ' + v);
}
console.log();
// implicit or inline callback function
// passing a function to a function as inlne or implicit fucntions
// Note: the callback function is anonymous function
console.log('implicit or inline callback function');
names.forEach(function(v:string, idx:number) {
    console.log('value at ' + idx + ' = ' + v);
});
console.log();
// using an arrow operator
// if a function accepts a callback function as input operator then use 
// the arrow operator as replacement or simpler syntax in ES 6
console.log('Using an arroe opwrator');
names.forEach((v:string,idx:number)=> {
    console.log('value at ' + idx + ' = ' + v);
});