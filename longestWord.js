function findLongestWord(str) {
  var array = str.split(' ');
  var x = 0;
  var length = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i].length > length){
      length = array[i].length;
      x = array[i];
    }
  }
  return x + ": " + length + " letters";
}

findLongestWord("The quick brown fox jumped over the lazy dog");
