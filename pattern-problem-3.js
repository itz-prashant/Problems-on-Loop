// Given a value n (positive integer) print the following pattern given below,

// n=4 , n=5

//       *              * 
//     * *            * * 
//   * * *          * * * 
// * * * *        * * * * 
//              * * * * *

let n = 5;

for(let row = 1; row <= n; row++){

    let str = ""
    let space = n-row
    for(let col = 1; col <= space; col++){
        str += " "
    }
    for(let col = 1; col <= row; col++){
        str += "*"
    }
    console.log(str);
}