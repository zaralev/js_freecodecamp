function repeatStringNumTimes(str, num) {
  var answer = "";
  var array = [];
  if (num < 0) {
    return answer;
  }
  else {
    for (var i = 0; i < num; i++){
        array += str;
    }
    return array;
  }
}

repeatStringNumTimes("abc", 3);
