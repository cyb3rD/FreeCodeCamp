/**
Remove all elements from the initial array
that are of the same value as these arguments.
**/
function destroyer(arr) {
    // Remove all the values

    var arPattern = [], // pattern array
        arRes = [];     // result array

    // Get pattern array
    for (var i = 1; i < arguments.length; i++) {
        arPattern.push(arguments[i]);
    }

    arRes = arr.filter(function(number) {
        inArray = true;
        arPattern.forEach(function(patternItem, j, arrPattern) {
             if (number === patternItem) {
                inArray =  false;
             }
        });
        return inArray;
    });

    return arRes;

}

destroyer([1, 2, 3, "tree", 2, 3, 1], 2, "tree");