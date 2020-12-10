// the "rest" parameters is the mechanism to pass variable
// numbers of parameters to a method
// it is represented as  '...values', 3 dots
// equivalent to object mutation
// Object.assign([], values)
// every-time values will be added in same array
var DemoRestParameters = /** @class */ (function () {
    function DemoRestParameters() {
    }
    DemoRestParameters.prototype.addWithArray = function (values) {
        var sum = 0;
        if (values.length > 0) {
            values.forEach(function (v, i) {
                sum += v;
            });
        }
        return sum;
    };
    // rest parameters
    /// this will create an immutabele array
    // with increasing parameters for each method invocation
    // the JavaScript will generate an 'arguments' array
    // that will have variable size for rest parameters
    DemoRestParameters.prototype.addWithRestParameters = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sum = 0;
        if (values.length > 0) {
            values.forEach(function (v, i) {
                sum += v;
            });
        }
        return sum;
    };
    return DemoRestParameters;
}());
var obj = new DemoRestParameters();
// only one [] (array) parameter is pased to the method
console.log("Add 2 parameters " + obj.addWithArray([1, 2]));
console.log("Add 2 parameters " + obj.addWithArray([1, 2, 3]));
console.log("Add 4 parameters " + obj.addWithArray([1, 2, 3, 4]));
console.log("Add 5 parameters " + obj.addWithArray([1, 2, 3, 4, 5]));
console.log("Add 6 parameters " + obj.addWithArray([1, 2, 3, 4, 5, 6]));
console.log();
console.log("Add 2 parameters " + obj.addWithRestParameters(1, 2));
console.log("Add 2 parameters " + obj.addWithRestParameters(1, 2, 3));
console.log("Add 4 parameters " + obj.addWithRestParameters(1, 2, 3, 4));
console.log("Add 5 parameters " + obj.addWithRestParameters(1, 2, 3, 4, 5));
console.log("Add 6 parameters " + obj.addWithRestParameters(1, 2, 3, 4, 5, 6));
