function titleCase(str) {
  var lower = str.toLowerCase();
  var newStr = lower.split(" ");
  var answer = "";
  for (var i = 0; i < newStr.length; i++){
    answer += newStr[i][0].toUpperCase()+newStr[i].slice(1) + " ";
  }
  answer = answer.substr(0,answer.length-1);
  return answer;
}

titleCase("This is a string to capitalize!");
