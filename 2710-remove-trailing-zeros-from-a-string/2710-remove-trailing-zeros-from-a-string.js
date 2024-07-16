/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    // Find the index of the last non-zero character
    let i = num.length - 1;
    while (i >= 0 && num[i] === '0') {
        i--;
    }
    
    // Slice the string up to the last non-zero character
    return num.slice(0, i + 1);
};