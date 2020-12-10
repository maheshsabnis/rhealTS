// implicit data-type definition

let num1 = 100; // num1 is 'number' based on Right-Hand-Side expression
console.log('Datatype of num1 = ' + typeof(num1) + 'and value = ' + num1);

// explicit data-type declaration
let num2:number;
num2=10;
console.log('Datatype of num2 = ' + typeof(num2) + 'and value = ' + num2);

let num3:number = 100.20; // floating point data definition
console.log('num3 = ' + num3); 

// string type
let fname:string = "Mahesh";
let mname:string = "Rameshrao";
let lname:string = "Sabnis";
console.log(fname + ' ' + mname + '  ' + lname);

 // boolean type
let isDone:boolean; 
isDone=true;
 
// Date
let dt:Date = new Date(2020, 11, 9);
console.log(dt);

// object type
// the JSON object 
let obj = {EmpNo:10, EmpName:'Mahesh'};
console.log('EmpNo  = ' + obj.EmpNo + '  EmpName ' + obj.EmpName);