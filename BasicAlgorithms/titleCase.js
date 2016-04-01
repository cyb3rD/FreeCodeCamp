function titleCase(str) {

    var arStr = [],
        chrTmp = "",
        resStr = [];

    arStr = str.split(" ");

    for (var i = 0; i < arStr.length; i++) {
        // 1st chaar to UpperCase
        chrTmp = arStr[i].charAt(0).toUpperCase();
        // make the result string
        resStr[i] = chrTmp + arStr[i].slice(1, arStr[i].length).toLowerCase();
    }

    return resStr.join(" ");
};

console.log(titleCase("I'm a little tea pot"));