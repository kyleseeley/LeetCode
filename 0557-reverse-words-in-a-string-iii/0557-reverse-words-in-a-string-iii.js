/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    
    // Reverse each word
    let reversedWords = words.map(word => word.split('').reverse().join(''));
    
    // Join the reversed words with a space
    let reversedSentence = reversedWords.join(' ');
    
    return reversedSentence;
};