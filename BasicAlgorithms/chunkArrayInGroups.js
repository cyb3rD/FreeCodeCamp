function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arRes = [];
  var start = 0;
  var end = size;

  var numOfGroups = arr.length/size;
  for (var i = 0; i < numOfGroups; i++ ) {
    arRes.push(arr.slice(start, end));
    start += size;
    end += size;
  }

  console.log(arRes);
  return arRes;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
