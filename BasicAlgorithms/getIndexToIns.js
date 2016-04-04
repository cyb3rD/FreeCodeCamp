/**
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
**/
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
    var posIndex;

    arr.sort(function(a, b) { return a - b;  });

    // Paste to the end
    if (num > arr[arr.length-1]) {
        return arr.length;
    }

    // check for the elements in array
    arr.forEach(function (element, index, array) {
        if (element === num) {
            posIndex = index;
        } else if ( (element > num) && (array[index-1] < num) ) {
            posIndex = index;
        }
    });

    // console.log('Paste index: ' + posIndex );
    return posIndex;
}

getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30); //  should return 2.
getIndexToIns([40, 60], 50); //  should return 1.
getIndexToIns([3, 10, 5], 3); //  should return 0.
getIndexToIns([5, 3, 20, 3], 5); //  should return 2.
getIndexToIns([2, 20, 10], 19); //  should return 2.
getIndexToIns([2, 5, 10], 15); //  should return 3.