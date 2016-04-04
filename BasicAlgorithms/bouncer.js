/**
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
**/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var arRes = [];
  for (var i = 0; i < arr.length; i++) {
    if ( Boolean(arr[i]) ) {
        arRes.push(arr[i]);
    }
  }

  console.log(arRes);
  return arRes;
}

bouncer([7, "ate", "", false, 9]);
