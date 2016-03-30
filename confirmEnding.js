function confirmEnding(str, target) {
   var len = target.length;
  if (target === str.substring(str.length-len)){
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
