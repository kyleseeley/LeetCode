/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            if (arr[left] < arr[right]) {
                arr[right] = arr[left];
            } else {
                arr[left] = arr[right];
            }
        }
        left++;
        right--;
    }

    return arr.join('');
};