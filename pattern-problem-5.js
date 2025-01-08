// Given a value n (positive integer) print the following pattern given below,

// n=5

// * * * * *
// * * * * 
// * * * 
// * * 
// * 

let n = 5;

for(let row = 1; row <= n; row++){
    
    let str = ""
    let star = n-row+1
    for(let i = 1; i <= star; i++){
        str += "*"
    }
    console.log(str);  
}