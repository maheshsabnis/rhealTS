// import module, this uses the
// Node.js 'fs' module this is the File-System
// module to search, locate and load module files.
import {StringUtilities} from './exportable';

let obj = new StringUtilities();
let name = "TypeScript is great language";
console.log(`Length of ${name} = ${obj.getLength(name)}`);
console.log(`UpperCsse ${name} = ${obj.changeCase('U', name)}`);
console.log(`LowerCsse ${name} = ${obj.changeCase('L', name)}`);