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
var MyBaseClass = /** @class */ (function () {
    function MyBaseClass() {
    }
    MyBaseClass.prototype.baseMessage = function () {
        console.log('Base Class Messsage Method');
    };
    return MyBaseClass;
}());
var MyDeriveClass = /** @class */ (function (_super) {
    __extends(MyDeriveClass, _super);
    function MyDeriveClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyDeriveClass.prototype.deriveMessage = function () {
        console.log('Derive Class Messsage Method');
    };
    return MyDeriveClass;
}(MyBaseClass));
var obj = new MyDeriveClass();
obj.baseMessage();
obj.deriveMessage();
