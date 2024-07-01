/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let result = s.split('');

    for (let i = 1; i < s.length; i += 2) {
        let letter = s[i - 1];
        let digit = parseInt(s[i]);
        result[i] = String.fromCharCode(letter.charCodeAt(0) + digit);
    }

    return result.join('');
};