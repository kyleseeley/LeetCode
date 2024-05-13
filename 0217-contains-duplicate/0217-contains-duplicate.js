/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    
    for (let num of nums) {
        if (seen.has(num)) {
            return true; // Duplicate found
        }
        seen.add(num); // Add the element to the set
    }
    
    return false; // No duplicates found
};