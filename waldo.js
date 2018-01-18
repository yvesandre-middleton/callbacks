// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
    arr.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  })
}

function actionWhenFound(indexHere) {
  console.log("Found Waldo at Index " + indexHere + " !");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);