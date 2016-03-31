function mutation(arr) {
  var answer = false;
  var check = 0;
  var first = arr[0].toLowerCase();
  var letters = arr[1].toLowerCase();
 for (var x = 0; x < arr[1].length; x++){
   answer = first.indexOf(letters[x]);
   if (answer == -1){
     return false;
     break;
   }
 }
  if (answer != -1){
    return true;
  }
  else{
    return false;
  }
}

mutation(["helo", "he"]);
