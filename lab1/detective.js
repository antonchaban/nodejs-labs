// https://www.codewars.com/kata/58b972cae826b960a300003e
function missingWord(nums, str) {
    //sort numbers in array
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    //edit text to lower, no spaces, to char
    str = str.replace(/\s/g,'').toLowerCase().split('');
    let answer = [];
    //find corresponding char
    for (let i = 0; i<nums.length; i++) {
        letter = str[parseInt(nums[i])];
        answer.push(letter);
    }
    if (und = answer.includes(undefined))
        answer = "No mission today";
    else
        answer = answer.join('');
    console.log(answer);
    return answer
}

//Testing
missingWord([5, 0, 3], "I love you") // exp.result: 'ivy'
missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog") // exp.result: 'bay'
missingWord([12, 4, 6], "Good Morning") // exp.result: 'No mission today'