/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let n = s.length;
    let result = new Array(n).fill(Infinity);
    
    // First pass: Left to Right
    let prev = -Infinity;
    for (let i = 0; i < n; i++) {
        if (s[i] === c) {
            prev = i;
        }
        result[i] = i - prev;
    }
    
    // Second pass: Right to Left
    prev = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }
        result[i] = Math.min(result[i], prev - i);
    }
    
    return result;
};