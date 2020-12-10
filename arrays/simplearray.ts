let values =[10,20,30,40,50,60,70,80,90];
// simple array iteration using for..loop
// the 'length' is the property of array class
for(let i=0; i< values.length;i++) {
    console.log('Value at ' + i + ' position = ' + values[i]);
}

// using for..in loop, a simplication of for..loop
// the for..in loop will use the 'length' property internally
for(let i in values) {
    console.log('Value at ' + i + ' position = ' + values[i]);
}
// the for..of loop, this is new nin ES 6, just like foreach in C#
for(let v of values) {
    console.log(v);
} 

