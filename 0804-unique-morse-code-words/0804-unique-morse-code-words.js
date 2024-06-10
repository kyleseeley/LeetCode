/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodes = [
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
        "..-","...-",".--","-..-","-.--","--.."
    ];
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const charToMorse = {};
    
    // Build the character to Morse code mapping
    for (let i = 0; i < alphabet.length; i++) {
        charToMorse[alphabet[i]] = morseCodes[i];
    }
    
    const uniqueTransformations = new Set();
    
    for (let word of words) {
        let transformation = '';
        for (let char of word) {
            transformation += charToMorse[char];
        }
        uniqueTransformations.add(transformation);
    }
    
    return uniqueTransformations.size;
};