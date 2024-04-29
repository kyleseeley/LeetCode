/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    let foundWord = false;
    
    // Start iterating from the end of the string
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            // If the current character is not a space, it's part of the last word
            length++;
            foundWord = true;
        } else if (foundWord) {
            // If we've found the last word and encounter a space, we're done
            break;
        }
    }
    
    return length;
};