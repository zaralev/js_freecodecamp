function chunkArrayInGroups(arr, size) {
  var array = [];
  for (var x = 0; x < arr.length; x+=size){
    array.push(arr.slice(x,x+size));
  }
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
