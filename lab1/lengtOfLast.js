function lengthOfLastWord(s) {
    s = s.trim();
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) { // iterate backwards
        if (s[i] === ' ') {
            break;
        }
        length++; // increment the length counter for each non-space character
    }
    return length;
}

const s = "Hello   World mf  ";
const length = lengthOfLastWord(s);
console.log(length);
