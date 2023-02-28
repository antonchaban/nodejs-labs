function myPow(x, n) {
    // if (n === 0) return 1;

    // if (n < 0){
    //     n = -n
    //     x = 1 / x
    // }
    // return x*myPow(x, n-1);
    if (n === 0) {
        return 1; // any number raised to the power 0 is 1
    }
    if (n < 0) {
        n = -n; // convert negative exponent to positive
        x = 1 / x; // invert the base
    }
    if (n % 2 === 0) {
        const y = myPow(x, n / 2);
        return y * y; // if the exponent is even, square the result
    } else {
        const y = myPow(x, Math.floor(n / 2));
        return y * y * x; // if the exponent is odd, multiply by the base as well
    }
};

const x = 2;
const n = -10;
const result = myPow(x, n);
console.log(result);
