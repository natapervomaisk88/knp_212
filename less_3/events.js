import EventEmitter from "node:events";
const emitter = new EventEmitter();
const listener1 = () => {
  console.log("listener1 +"); //підписник
};

emitter.on("connection", listener1);
emitter.addListener("connection", () => {
  console.log("listener2 +");
});
emitter.once("connection", () => {
  console.log("тимчасовий+");
});
emitter.emit("connection");
console.log("=============");
//emitter.off("connection", listener1);
emitter.removeListener("connection", listener1);
emitter.emit("connection");
