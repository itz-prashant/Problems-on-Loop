// Given a number "X" calculate the sum of digit of the no. "X".

// Ex: x= 4136 [4+1+3+6]
//  ans = 14

let x = 4136

let sum = 0

while (x > 0) {
    let lastDigit = x % 10;
    sum += lastDigit;
    x =  Math.floor(x / 10)
}

console.log(sum);


