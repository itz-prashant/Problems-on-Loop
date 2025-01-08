// Given a value n (positive integer) print the following pattern given below,

// n = 3,

//             *                            
//           * * *              
//         * * * * *                
//           * * *              
//             *                

let n = 3;

for(let row = 1; row <= n; row++){
    
    let str = ""
    for(let i = 1; i <= n-row; i++){
        str += " "
    }
    for(let col = 1; col <= 2*row-1; col++){
        str += "*"
    }
    console.log(str);
    
} 

for(let row = 1; row <= n-1; row++){
    let str = ""
    for(let i = 1; i <= row; i++){
        str += " "
    }
    let star = 2*(n-row) - 1
    for(let col = 1; col <= star; col++){
        str += "*"
    }
    console.log(str);
}