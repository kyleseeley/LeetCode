/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = '';
    let balance = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            balance++;
        } else {
            balance--;
        }

        // When balance is zero, we have found a primitive
        if (balance === 0) {
            // Add the substring without the outermost parentheses to result
            result += s.substring(start + 1, i);
            // Update the start for the next primitive
            start = i + 1;
        }
    }

    return result;
};