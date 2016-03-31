function bouncer(arr) {
  function isNotFalse(x) {
    return Boolean(x);

  }
  return arr.filter(isNotFalse);
}

bouncer([7, "ate", "", false, 9]);
