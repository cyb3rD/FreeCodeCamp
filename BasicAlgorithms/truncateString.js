function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) {
    return str;
  } else  if ( (str.length > num) && (num > 3)  ) {
    return str.slice( 0, (num-3) ) + "...";
  } else {
    return str.slice(0, num) + "...";
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));