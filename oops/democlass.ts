class ClsMath {
    // default access specifier is 'public'
    // explicitely define them as 'private'
    // private x:number;
    // private y:number;
    // constructor scope parameters
    // constructor(a:number, b:number){
    //     this.x = a;
    //     this.y = b;
    // }

    // private class members to a constructor
    // uses within class 
    constructor(private x:number, private y:number){}
    
    // public constructor parameters
    //constructor(public x:number, public y:number){}

    add(): number {
        return this.x + this.y;
    }
    subst(): number {
        return this.x - this.y;
    }
    multi(): number {
        return this.x * this.y;
    }
    div(): number {
        return this.x / this.y;
    }
}

let obj = new ClsMath(20,10);

console.log(`Add =  ${obj.add()}`);
console.log(`Subst =  ${obj.subst()}`);
console.log(`Multi =  ${obj.multi()}`);
console.log(`Div =  ${obj.div()}`);