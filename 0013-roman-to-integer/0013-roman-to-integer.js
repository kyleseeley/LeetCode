/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let currentValue = romanValues[s[i]];
        let nextValue = romanValues[s[i + 1]];

        // If current value is less than next value, it means subtraction is needed
        if (nextValue && currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
};