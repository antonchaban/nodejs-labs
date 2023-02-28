// https://www.codewars.com/kata/5287e858c6b5a9678200083c
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to
// the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
    let val_str = value.toString().split('');
    let sum = 0;
    for (let i = 0; i < val_str.length; i++)
        sum += parseInt(val_str[i])**parseInt(val_str.length);
    if (sum == value)
        console.log('Number ' + value + '  is narcissitic')
        // return true
    else
        console.log('Number ' + value + ' is not narcissitic. Result is ' + sum)
        // return false
}

//Testing
narcissistic(153); //expected result: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
narcissistic(1652) //expected result: 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938






