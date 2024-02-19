function capatilize(value) {
  const stringToCapatalize = value.trim();
  return stringToCapatalize[0].toUpperCase() + stringToCapatalize.substring(1);
}

function reverseString(value) {
  const stringToReverse = value.trim();
  let reversedString = '';
  let i = stringToReverse.length - 1;
  while (i >= 0) {
    reversedString += stringToReverse[i];
    i -= 1;
  }
  return reversedString;
}

module.exports = {
  capatilize,
  reverseString,
};
