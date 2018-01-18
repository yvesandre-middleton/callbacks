var numbers = [1000,2,3,4,5];

// Not our solution but it does somethign!

function logAll(array) {
  // for (var i = 0; i < array.length; i ++) {
  //   console.log(array[i]);
  // }
  // the loop below does the same as above !!!!!!!!
  // if you need an index you would use the other loop !
  // for of loop made for arrays
  for (var item of array) {
    console.log(item);
  }
}

function forEach (array, action) {
  for (var item of array) {
    action(item);
  }
}

function exampleAction(item) {
  console.log(item + ' is a ' + typeof(item));
}

function multiplyBy2(item) {
console.log(item * 2);
}

// A function is like a variable that wholes code. You don't have to call it and let's another
// function use it. You can use it's contents elsewhere.
// If you call the function exampleAction you will get and error. You have to give it a
// a function. If you pass it a string using return it will break as i's looking for a
// function.

forEach(numbers, exampleAction);
forEach(numbers, multiplyBy2);
forEach(numbers, console.log)
// Below. called an anonymous function not named.
forEach(numbers, function(arg) {
for (var i = arg; i > 0; i--) {
  console.log(i + "bottles of beer on the wall, " + i + "bottles of beeeeeeer!")
  }
});