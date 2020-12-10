let value:number|string;
value = 100;
console.log('Type of value = ' + typeof(value) + '   and value =  ' + value);
value = "Mahesh";
console.log('Type of value = ' + typeof(value) + '   and value =  ' + value);


function processData(val:number|string){
    if(typeof(val) === 'number') {
        return val * val;
    }
    if(typeof(val) === 'string') {
        return val.toUpperCase();
    }
}

console.log('With Number ' + processData(10));
console.log('With String ' + processData('mahesh'));
 