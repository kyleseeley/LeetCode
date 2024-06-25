/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if (words.length !== s.length) {
        return false;
    }
    
    let acronym = '';
    
    for (let word of words) {
        acronym += word[0];
    }
    
    return acronym === s;
};