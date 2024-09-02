// console.log("start");

// setTimeout(() => {
//   console.log("settimeout");
// }, 0);

// console.log("end");

function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logC() {
  console.log("C");
}
function logD() {
  console.log("D");
}
function logE() {
  console.log("E");
}
// Click the "RUN" button to learn how this works!
logA();
setTimeout(logB, 0); //macro task
Promise.resolve().then(logC); //micro task
logD();
Promise.resolve().then(logE); //micro task
