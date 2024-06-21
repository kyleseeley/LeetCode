/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // Split the shuffled sentence into words
    const words = s.split(' ');

    // Extract the positions and sort the words based on these positions
    const sortedWords = words
        .map(word => {
            const position = word.slice(-1); // Extract the position
            const actualWord = word.slice(0, -1); // Extract the actual word without the position
            return { position: parseInt(position), word: actualWord };
        })
        .sort((a, b) => a.position - b.position) // Sort words by their positions
        .map(item => item.word); // Extract the sorted words

    // Join the sorted words to form the original sentence
    return sortedWords.join(' ');
};