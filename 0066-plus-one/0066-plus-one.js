/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;
    
    for (let i = n - 1; i >= 0; i--) {
        // Increment the current digit
        digits[i]++;
        
        if (digits[i] < 10) {
            return digits;
        }
        
        digits[i] = 0;
    }

    digits.unshift(1);
    
    return digits;
};