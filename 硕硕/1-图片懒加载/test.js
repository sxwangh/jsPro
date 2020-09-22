function max() {
  var values = Array.prototype.slice.call(arguments, 0);
  console.log(values);
  // ...
}
max(1,2,3);


function max(...value) {
  console.log(value);
}
max(1,2,3);
