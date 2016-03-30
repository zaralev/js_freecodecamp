function largestNumber(arr){
  var answer = 0;
  for (var x = 0; x < arr.length; x++){
    if (arr[x] > answer){
      answer = arr[x];
    }
  }
  return answer;
}

function largestOfFour(arr) {
  var array = [];
  for (var x = 0; x < arr.length; x++){
    array.push(largestNumber(arr[x]));
  }
  return array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
