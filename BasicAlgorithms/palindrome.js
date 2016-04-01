var isPalindrome = function(srcString) {

    var cmpString = "",
        cmpStringRes = "",
        result = false;

    cmpString = srcString.replace(/\W/g,"").replace(/\_/g,"").toLowerCase();
    cmpStringRes = cmpString.split("").reverse().join("");

    console.log('SRC string: ' + srcString + '| Result string: ' + cmpString);
    if (cmpString === cmpStringRes) {
        result = true;
    }

    return result;
}

console.log(isPalindrome("Ca#r Ra$ c"));
console.log(isPalindrome("0_0 (: /-\ :) 0-0"));
console.log(isPalindrome("My age is 0, 0 si ega ym."));

