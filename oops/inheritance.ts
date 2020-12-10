class BaseClass {
    display():void {
        console.log('Base Display');
    }
    printMessage(): void {
        console.log('Base Print Message');
    }
}

class DeriveClass extends BaseClass {
    display(): void {
        console.log('Derive Display');
    }
    newMethod():void {
        console.log('New method of the deribed class');
    }
}
// individually declaring instances of classes
let objB = new BaseClass();
objB.display(); // call base clas method
objB.printMessage();
let objD = new DeriveClass();
objD.display(); // call derive class method
objD.printMessage(); // from the base class
objD.newMethod(); // method from the deribed class

// instantiating the BaseClass reference using Derive class
let objDB:BaseClass = new DeriveClass(); // upcasting
objDB.display();// derive class method is called that 'shadows' the matching method of the BaseClass
objDB.printMessage();  // the method from the reference of the BAse class is accessible



//((BaseClass)objDB).display(); // not allowed compilation error

// instance definition is for BaseClass , invalid w.r.t. the OOPs principal for instance
// creation please avoid it, Since language is TypeScript its compile time error
let objBD:DeriveClass =new BaseClass();
objBD.display(); // call the base class method
objBD.newMethod(); // derive class // --> method that will produce comoile time errors
objBD.printMessage(); // base class method

//((DeriveClass)objBD).display(); // not allows compilation error