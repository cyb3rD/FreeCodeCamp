function repeatStringNumTimes(str, num) {
  // repeat after me
  var resStr = "";

  if (num < 0) {
    return resStr;
  }

  for (var i = 0; i < num; i++) {
    resStr += str;
  }

  return resStr;
}

repeatStringNumTimes("abc", 3);
