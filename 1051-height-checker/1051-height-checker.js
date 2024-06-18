/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // Create a copy of the heights array and sort it to get the expected order
    let expected = [...heights].sort((a, b) => a - b);
    
    // Initialize a counter for mismatched indices
    let count = 0;
    
    // Compare the original heights array with the expected array
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++;
        }
    }
    
    return count;
};