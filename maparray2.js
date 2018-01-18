var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(inputList, map) {
  var output = []
  // for each element in inputList add the output of callback to output
  words.forEach(function(inputList){
output.push(map(inputList));
  })
  console.log(output);
}


