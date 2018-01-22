const sortinate = (string) => {
  // sort chars in string in descending order of ASCII value
  return string.split('').sort((a, b) => a < b).join('');
};

module.exports = {
  sortinate,
};
