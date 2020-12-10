// implicit data-type definition
var num1 = 100; // num1 is 'number' based on Right-Hand-Side expression
console.log('Datatype of num1 = ' + typeof (num1) + 'and value = ' + num1);
// explicit data-type declaration
var num2;
num2 = 10;
console.log('Datatype of num2 = ' + typeof (num2) + 'and value = ' + num2);
var num3 = 100.20; // floating point data definition
console.log('num3 = ' + num3);
// string type
var fname = "Mahesh";
var mname = "Rameshrao";
var lname = "Sabnis";
console.log(fname + ' ' + mname + '  ' + lname);
// boolean type
var isDone;
isDone = true;
// Date
var dt = new Date(2020, 11, 9);
console.log(dt);
// object type
// the JSON object 
var obj = { EmpNo: 10, EmpName: 'Mahesh' };
console.log('EmpNo  = ' + obj.EmpNo + '  EmpName ' + obj.EmpName);
