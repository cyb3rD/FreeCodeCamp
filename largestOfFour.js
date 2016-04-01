function largestOfFour(arr) {
    // You can do this!
    var arResult = [];

    for (var i = 0; i < arr.length; i++) {
        arr[i].sort(function (a,b) {
            return b-a;
        });
        arResult.push(arr[i][0]);
    };
    return arResult;
};

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
