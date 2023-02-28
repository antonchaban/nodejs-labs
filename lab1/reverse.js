function reverse(x) {
    const isNegative = x < 0; // check if the number is negative
    let num = Math.abs(x);
    let reversed = 0;

    while (num > 0) {
        reversed = reversed * 10 + num % 10; // extract the last digit and add it to the reversed number
        num = Math.floor(num / 10); // remove the last digit
    }

    if (isNegative) {
        reversed = -reversed;
    }

    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversed;
}

// example usage
const x = 120;
const reversed = reverse(x);
console.log(reversed); // prints 54321
