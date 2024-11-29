import { log } from "node:console";
import { Buyer } from "./Buyer.js";
import EventEmitter from "node:events";
const emitter = new EventEmitter();

const f1 = () => {
  log("f1 start...");
};
const f2 = () => {
  log("f2 start...");
};
const f3 = () => {
  log("f3 start...");
};

//log(emitter.listeners("start"));
//log(emitter.listenerCount("start"));
//log(`Default: ${emitter.getMaxListeners()}`); //10

// const buyers = [
//   new Buyer("Alex", "alex@gmail.com"),
//   new Buyer("John", "john@gmail.com"),
//   new Buyer("Emily", "emily@gmail.com"),
//   new Buyer("Sophia", "sophia@gmail.com"),
//   new Buyer("Michael", "michael@gmail.com"),
//   new Buyer("Sarah", "sarah@gmail.com"),
//   new Buyer("David", "david@gmail.com"),
//   new Buyer("Emma", "emma@gmail.com"),
//   new Buyer("Daniel", "daniel@gmail.com"),
//   new Buyer("Olivia", "olivia@gmail.com"),
// ];

// emitter.setMaxListeners(buyers.length);

// buyers.forEach((buyer) => {
//   emitter.on("sale", (sale) => buyer.notifyAboutSale(sale));
// });

// emitter.emit("sale", 20);
//log(emitter.eventNames());
emitter.on("start", f1);
emitter.on("start", f2);
emitter.prependListener("start", f3);

emitter.removeAllListeners("start");
emitter.emit("start");
