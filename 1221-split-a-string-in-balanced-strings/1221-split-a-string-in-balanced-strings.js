/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0;
    let balancedCount = 0;
    
    for (let char of s) {
        if (char === 'L') {
            balance++;
        } else if (char === 'R') {
            balance--;
        }
        
        if (balance === 0) {
            balancedCount++;
        }
    }
    
    return balancedCount;
};