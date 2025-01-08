// Given a value n (positive integer) print the following pattern given below,

// n=4 , n=5

// * * * *       * * * * *
// * * * *       * * * * *
// * * * *       * * * * *
// * * * *       * * * * *
//               * * * * *   


let n = 5;

for(let row = 1; row <= n; row++){
    
    let stars = "";

    for(let col = 1; col <= n; col++){
        stars += "*"
    }
    console.log(stars);
}