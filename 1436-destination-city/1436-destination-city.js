/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    // Create a set to store cities with outgoing paths
    let citiesWithOutgoingPaths = new Set();
    
    // Populate the set with the starting cities of each path
    for (let [cityA, cityB] of paths) {
        citiesWithOutgoingPaths.add(cityA);
    }
    
    // Find the destination city which is not in the set of cities with outgoing paths
    for (let [cityA, cityB] of paths) {
        if (!citiesWithOutgoingPaths.has(cityB)) {
            return cityB;
        }
    }

};