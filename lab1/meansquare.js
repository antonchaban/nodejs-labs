//https://www.codewars.com/kata/51edd51599a189fe7f000015
// Mean Square Error

function meansquare(firstArray, secondArray) {
    let means = [], answer = 0, result = 0;
    //find means squared
    for (let i = 0; i < firstArray.length; i++) {
        means[i] = (firstArray[i] - secondArray[i])**2;
    }
    //find sum
    for (let i = 0; i < means.length; i++) {
        answer += means[i];
    }
    //find average
    result = answer/means.length;
    console.log(result);
    return result
}

// Testing
meansquare([1,2,3],[4,5,6]) // exp.result: 9
meansquare([10,20,10,2],[10,25,5,-2]) // exp.solution: 16.5
meansquare([0, -1], [-1, 0]) // exp.solution: 1