/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const seen = new Map(); // Map to store elements and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        // If num is already in the map and the difference in indices is <= k, return true
        if (seen.has(num) && i - seen.get(num) <= k) {
            return true;
        }
        
        // Otherwise, update the index of num in the map
        seen.set(num, i);
    }
    
    // No such pair found
    return false;
};