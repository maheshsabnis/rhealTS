// generic class
var GenericStack = /** @class */ (function () {
    function GenericStack() {
        this.arr = [];
    }
    // generic method with generic input parameter
    GenericStack.prototype.push = function (item) {
        this.arr.push(item);
    };
    // generic method with generic return type
    GenericStack.prototype.pop = function () {
        return this.arr.pop();
    };
    GenericStack.prototype.display = function () {
        return this.arr;
    };
    return GenericStack;
}());
// instance for number datatype
var objNum = new GenericStack();
objNum.push(10);
objNum.push(20);
objNum.push(30);
console.log("Data in Numeric array " + JSON.stringify(objNum.display()));
console.log("Poped values " + objNum.pop());
console.log("Data in Numeric array after pop " + JSON.stringify(objNum.display()));
// instace of string datatype
var objStr = new GenericStack();
objStr.push("A");
objStr.push("B");
objStr.push("C");
console.log("Data in String array " + JSON.stringify(objStr.display()));
console.log("Poped values " + objStr.pop());
console.log("Data in String array after pop " + JSON.stringify(objStr.display()));
