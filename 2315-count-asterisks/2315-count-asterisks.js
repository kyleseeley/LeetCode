/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0;
    let insidePair = false;

    for (let char of s) {
        if (char === '|') {
            insidePair = !insidePair; // Toggle the insidePair flag
        } else if (char === '*' && !insidePair) {
            count++;
        }
    }

    return count;
};