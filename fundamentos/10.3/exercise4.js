function function1(string) {
  return string.toUpperCase();
}

function function2(string) {
  return string[0];
}

function function3(string1, string2) {
  return `${string1} ${string2}`;
}

module.exports = {
  function1,
  function2,
  function3
}