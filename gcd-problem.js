// Find the greatest common divisor of a & b

let a = 25;
let b = 30;

let ans = 1;

for(let i = 1; i <= Math.min(a, b) ; i++){
    
    if( a % i == 0 && b % i == 0){
        ans = i
    }
}

console.log(ans);
