// Give a number x , write a function to determine whether a given number is prime or not

function isPrime(x){
    for(let i = 2; i < x; i++){
        if(x % i == 0){
            return false 
        }
    }
    return true
}
console.log(isPrime(63));
