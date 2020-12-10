
// var is function level declaratoin,
// it wil accessible throught function from its declaration 
function display(x){
    if(x) {
        var y = 10;
        console.log(`in if block y  =${y}`);
    }
    console.log(`out of if block y  =${y}`);
}

display(true);
display(false);

// the 'let' declaration will scope the varible inside the declaring block
function displayScope(x){
    if(x) {
        let y = 10;
        console.log(`in if block y  =${y}`);
    }
    console.log(`out of if block y  =${y}`);
}
displayScope(true);
displayScope(false);