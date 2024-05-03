/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const binaryString = n.toString(2);
    
    let count = 0;
    
    // Iterate through each character of the binary representation
    for (let i = 0; i < binaryString.length; i++) {
        // Increment count if the current bit is set (equal to '1')
        if (binaryString[i] === '1') {
            count++;
        }
    }
    
    return count;
};