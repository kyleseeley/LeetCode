/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsSet = new Set(jewels);
    
    // Initialize a counter for the number of jewels in stones
    let count = 0;
    
    // Iterate through each character in stones
    for (let stone of stones) {
        // If the stone is also a jewel, increment the count
        if (jewelsSet.has(stone)) {
            count++;
        }
    }
    
    return count;
};