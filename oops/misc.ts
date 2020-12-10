abstract class MyBaseClass {
    baseMessage():void {
        console.log('Base Class Messsage Method');
    }
}

class MyDeriveClass extends MyBaseClass{
    deriveMessage():void {
        console.log('Derive Class Messsage Method');
    }
}


let obj = new MyDeriveClass();

obj.baseMessage();
obj.deriveMessage();