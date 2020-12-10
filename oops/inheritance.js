var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    BaseClass.prototype.display = function () {
        console.log('Base Display');
    };
    BaseClass.prototype.printMessage = function () {
        console.log('Base Print Message');
    };
    return BaseClass;
}());
var DeriveClass = /** @class */ (function (_super) {
    __extends(DeriveClass, _super);
    function DeriveClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeriveClass.prototype.display = function () {
        console.log('Derive Display');
    };
    DeriveClass.prototype.newMethod = function () {
        console.log('New method of the deribed class');
    };
    return DeriveClass;
}(BaseClass));
// individually declaring instances of classes
var objB = new BaseClass();
objB.display(); // call base clas method
objB.printMessage();
var objD = new DeriveClass();
objD.display(); // call derive class method
objD.printMessage(); // from the base class
objD.newMethod(); // method from the deribed class
// instantiating the BaseClass reference using Derive class
var objDB = new DeriveClass(); // upcasting
objDB.display(); // derive class method is called that 'shadows' the matching method of the BaseClass
objDB.printMessage(); // the method from the reference of the BAse class is accessible
//((BaseClass)objDB).display(); // not allowed compilation error
// instance definition is for BaseClass
var objBD = new BaseClass();
objBD.display(); // call the base class method
objBD.newMethod(); // derive class
objBD.printMessage(); // base class method
//((DeriveClass)objBD).display(); // not allows compilation error
