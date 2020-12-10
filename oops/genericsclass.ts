// generic class
class GenericStack<T> {
    // generic member
    private arr:T[];
    private top:number;

    constructor() {
        this.arr = [];
    }
 
    // generic method with generic input parameter
    push(item:T):void{
        this.arr.push(item);
    }
    // generic method with generic return type
    pop():T {
        return this.arr.pop();
    }
    display(): T[] {
        return this.arr;
    }
}
// instance for number datatype
let objNum = new GenericStack<number>();
objNum.push(10);
objNum.push(20);
objNum.push(30);
console.log(`Data in Numeric array ${JSON.stringify(objNum.display())}`);
console.log(`Poped values ${objNum.pop()}`);
console.log(`Data in Numeric array after pop ${JSON.stringify(objNum.display())}`);

// instace of string datatype
let objStr = new GenericStack<string>();
objStr.push("A"); objStr.push("B"); objStr.push("C");
console.log(`Data in String array ${JSON.stringify(objStr.display())}`);
console.log(`Poped values ${objStr.pop()}`);
console.log(`Data in String array after pop ${JSON.stringify(objStr.display())}`);