// # template string
// mechanism of creating an immutable string without concatination
var fname = "Tejas";
var mname = "Mahesh";
var lname = "Sabnis";
// traditional caocatinaion
// 5 string objects
console.log(fname + ' ' + mname + ' ' + lname);
// ES 6 template string
// single string ${<string-expression>} is called as interpolation
console.log(fname + " " + mname + " " + lname);
