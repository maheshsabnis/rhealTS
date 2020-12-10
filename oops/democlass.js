var ClsMath = /** @class */ (function () {
    // default access specifier is 'public'
    // explicitely define them as 'private'
    // private x:number;
    // private y:number;
    // constructor scope parameters
    // constructor(a:number, b:number){
    //     this.x = a;
    //     this.y = b;
    // }
    function ClsMath(x, y) {
        this.x = x;
        this.y = y;
    }
    ClsMath.prototype.add = function () {
        return this.x + this.y;
    };
    ClsMath.prototype.subst = function () {
        return this.x - this.y;
    };
    ClsMath.prototype.multi = function () {
        return this.x * this.y;
    };
    ClsMath.prototype.div = function () {
        return this.x / this.y;
    };
    return ClsMath;
}());
var obj = new ClsMath(20, 10);
console.log("Add =  " + obj.add());
console.log("Subst =  " + obj.subst());
console.log("Multi =  " + obj.multi());
console.log("Div =  " + obj.div());
