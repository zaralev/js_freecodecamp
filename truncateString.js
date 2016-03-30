function truncateString(str, num) {
  if (num <= 3){
    return str.slice(0,num) + "...";
  }
  else if (str.length == num || str.length < num){
    return str;
  }

  else {
    var diff = str.length - (str.length-num)-3;
    return str.slice(0,diff) + "...";
  }

}

truncateString("The quick brown fox jumped over the lazy dog.", 20);
