// Given a value n (positive integer) print the following pattern given below,

// n=4 , n=5

// *            * 
// * *          * * 
// * * *        * * * 
// * * * *      * * * * 
//              * * * * *

let n = 6;
let star = ""

for(let row = 1; row <= n; row++){
    
    star += "*"
    console.log(star);
}

// Second method
console.log("Second method");

for(let row = 1; row <= n; row++){
    let str = ""
    for(let col = 1; col <= row; col++){
        str += "*"
    }
    console.log(str);
}
