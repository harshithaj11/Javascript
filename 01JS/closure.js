// function init(){
//     var firstName="Harshitha";
//     console.log("I am init");
//     function sayFirstName(){
//         console.log(`My name is ${firstName}`);
//     }
//     return sayFirstName;
// }
// var value = init();
// value();

// ------------------------------------------------------
function doAdd(x){
    return function (y){
        return x+y;
    }
}
var value = doAdd(5) //store return of function y
console.log(value);
var z = value(5); 
console.log(z);

// var value = doAdd(5)(5)
// console.log(value);
