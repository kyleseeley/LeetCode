/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xorResult = x ^ y;
    
    // Step 2: Count the number of 1s in the binary representation of the result
    let hammingDistance = 0;
    while (xorResult !== 0) {
        // Increment count if the last bit is 1
        hammingDistance += xorResult & 1;
        // Shift right to check the next bit
        xorResult >>= 1;
    }
    
    return hammingDistance;
};