function mutation(arr) {
    var strSrc = arr[0].toLowerCase(),
        strPattern = arr[1].toLowerCase(),
        strPatternLen = strPattern.length,
        numOfMatch = 0;
        result = false;

    for ( var j = 0; j < strPatternLen; j++) {
        if ( strSrc.indexOf(strPattern.charAt(j)) >= 0 ) {
            numOfMatch++;
        }
    }

    if (numOfMatch === strPatternLen) {
        result = true;
    }

    console.log(result);
    return result;
}

mutation(["hello", "hey"]);//  should return false.
mutation(["hello", "Hello"]); //  should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //  should return true.
mutation(["Mary", "Army"]); // should return true.
mutation(["Mary", "Aarmy"]); // should return true.
mutation(["Alien", "line"]); // should return true.
mutation(["floor", "for"]); // should return true.
mutation(["hello", "neo"]); // shoul return false.
