// Given a value n (positive integer) print the following pattern given below,
// n always will beodd
// n=5 , n=7

// *       *        *             * 
// * *   * *        *  *        * *
// * * * * *        *  *  *   * * * 
// * *   * *        *  *  *   * * *   
// *       *        *  *  *   * * *
//                  *  *        * *  
//                  *             *

let n = 7;

for(let row = 1; row <= (n-1)/2; row++){

    let str = ""

    for(let i = 1; i <= row; i++){
        str += "*"
    }

    let space = n - 2*row
    
    for(let j = 1; j <= space ; j++){
        str += " "
    }

    for(let i = 1; i <= row; i++){
        str += "*"
    }
    console.log(str);
}

for(let i = 1; i <= 1; i++){
    let str = ""
    for(let j = 1; j <= n; j++){
        str += "*"
    }
    console.log(str);
}


for(let row = 1; row <= (n-1)/2; row++){

    let str = ""
    let star = ((n-1)/2) - row + 1
    for(let i = 1; i <= star; i++){
        str += "*"
    }

    let space = 2*row - 1
    
    for(let j = 1; j <= space ; j++){
        str += " "
    }

    for(let i = 1; i <= star; i++){
        str += "*"
    }
    console.log(str);
}