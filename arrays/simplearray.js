var values = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// simple array iteration using for..loop
// the 'length' is the property of array class
for (var i = 0; i < values.length; i++) {
    console.log('Value at ' + i + ' position = ' + values[i]);
}
// using for..in loop, a simplication of for..loop
// the for..in loop will use the 'length' property internally
for (var i in values) {
    console.log('Value at ' + i + ' position = ' + values[i]);
}
// the for..of loop, this is new nin ES 6, just like foreach in C#
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var v = values_1[_i];
    console.log(v);
}
