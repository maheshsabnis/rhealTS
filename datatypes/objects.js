var obj1 = { x: 10 };
console.log('value of x in obj1 = ' + obj1.x); // print 10
var obj2 = obj1; // storing schema of obj1 into obj2 means that both will point to same memory 
console.log('value of x in obj1 = ' + obj1.x + '  and value of x in obj2 = ' + obj2.x); // print 10 for both
obj2.x = 100; // updaing x in obj 2
console.log('Aftre updating obj2.x to 100 then value of x in obj1 = ' + obj1.x + '  and value of x in obj2 = ' + obj2.x); // print 10 for both
// use Object.assign() to create an empty object based on schema of the original object
// this new object will also have values of the object from which the new object is created
var obj3 = Object.assign({}, obj2);
console.log('value of x in obj2 = ' + obj2.x + '  and value of x in obj3 = ' + obj3.x); // print 10 for both
obj3.x = 600;
console.log('Aftre updating obj3.x to 600 then value of x in obj2 = ' + obj2.x + '  and value of x in obj3 = ' + obj3.x); // print 10 for both
