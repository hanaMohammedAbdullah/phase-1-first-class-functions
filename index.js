function receivesAFunction(callback) {
  callback();
  console.log("finsh");
}

function returnsANamedFunction() {
  return function named() {
    console.log("named");
  }
}

function returnsAnAnonymousFunction() {
  return () => console.log("anonymous");
}
// receivesAFunction(function () {
//   console.log("Stretch! Work that core!");
// }
// );
