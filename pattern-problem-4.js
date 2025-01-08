// Given a value n (positive integer) print the following pattern given below,

// n=5

//             * 
//           * * * 
//         * * * * *
//        * * * * * * *  
//      * * * * * * * * *     

let n = 5;

for(let row = 1; row <= n; row++){
    
    let str = ""
    let space = n-row

    for(let i = 1; i <= space; i++){
        str += " "
    }
    let stars = 2*row - 1
    for(let col = 1; col <= stars; col++){
        str += "*"
    }
    console.log(str);
}