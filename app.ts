
// union literals
let sports : string | number = "1"  // 21;
console.log(typeof sports);

// . lgany se method show hoty hen
sports // sports.

// narowing  iska mtlb h chota ya km krna

// ternary opr  , uses
                //             condition        ?     if : else     condition true ho to if chlta otherwise else
let newage : number | string = Math.random() > 0.5? "sherry":22  // Math.random 0.1 se 0.9 tk random num generate krta
// Math.random generate a number between 021
console.log(newage);
console.log(Math.random());


//                               condition        ?     if : else
let oldage : string | number =  Math.random() > 0.8? "bhatti" : 24;

//console.log(typeof oldage);

if(typeof oldage !== "string" ){
console.log(oldage);
}else{
    console.log(oldage.toUpperCase);
}

console.log(oldage);


