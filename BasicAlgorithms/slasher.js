function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var arRes = [];
  if (howMany === 0) {
    return arr;
  } else if (howMany > arr.length) {
    // console.log(arRes);
    return arRes;
  } else {
    arRes = arr.slice(howMany, arr.length);
  }
  // console.log(arRes);
  return arRes;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);
slasher([1, 2, 3], 4);
slasher(["burgers", "fries", "shake"], 1);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);