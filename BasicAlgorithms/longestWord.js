function findLongestWord(str) {
    var arWords = [],
    maxlen;

    arWords = str.split(" ");
    maxlen = arWords[0].length;
    for (var i = 1; i < arWords.length; i++) {
       if (arWords[i].length > maxlen) {
            maxlen = arWords[i].length;
       }
    }

  // return str.length;
  // console.log(arWords);
  return maxlen;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));