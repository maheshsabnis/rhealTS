let a = 1; // number 
let b = "1"; // string

// using == for value equality
// only value will be compared by excluding the datatype
console.log(a == b); // return true

// using  === for deept equality
// comapre type and then value
console.log(a === b); // return false

// parsing operators

let c = "123abc"
// check if the value starts from numbric range
// the string will be parsed only till numeric values
// once the first string/character occires
// the only numebric values will be parsed into number datatype   
console.log(parseInt(c));

let d = "456xyz";

console.log(parseInt(c) + parseInt(d));


