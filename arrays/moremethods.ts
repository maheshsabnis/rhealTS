let names = ["james bond", "indiana jones", "ethan hunt", "jason bourn", "john rambo", "terminator"];

// sorting an array
let sortnames = names.sort(); // aplhabetic order
console.log('Sorted ' + JSON.stringify(sortnames));
let reverse = names.reverse(); // aplhabetic order
console.log('Sorted ' + JSON.stringify(reverse));
// filter only tose names lavong length greater than 10

// older JavaScript code
for(let i in names) {
    if(names[i].length > 10) {
        console.log(names[i]);
    }
}
// using ES 6 filter() method of array
// return value from 'names' array if the condition is true and the result will be stored in new array
let result = names.filter((val,idx)=>{
    return val.length > 10; 
});
console.log('Name with length more than 10 chars ' + JSON.stringify(result));

