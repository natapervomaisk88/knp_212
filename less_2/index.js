// const interval = setInterval(() => {
//   console.log("sI");
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 4000);

// setImmediate(() => {
//   console.log("set immediate");
// });

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// queueMicrotask(() => {
//   console.log("microtask");
// });

// const product = {
//   id: 1,
//   title: "tv",
//   price: 30000,
// };

// const product2 = structuredClone(product);
// product.id = 2;
// console.table(product2);
// const product2 = { ...product }; //глибока копія
// product.id = 2;
// console.table(product2);
// const product2 = product; //поверхностное копирование
// product.id = 2;
// console.table(product2);

// const user = {
//   id: 1,
//   name: "Alex",
//   address: {
//     street: "Sadova",
//     ap: 5,
//   },
// };
// const user2 = structuredClone(user);
// user.address.ap = 100;
// console.log(user2);
// console.log(user);
// const user2 = { ...user };
// user.id = 100;
// console.table(user2);
// const str = "Hello";
// const encoding = btoa(str); //base64 кодування
// console.log(encoding);
// const decoding = atob(encoding); //base64 декодування
// console.log(decoding);
// const start = performance.now();
// let sum = 0;
// for (let i = 0; i < 1e7; i++) {
//   sum += i;
// }
// console.log(sum);
// console.log(`Time : ${performance.now() - start}`);
// fetch("http://localhost:3000/users")
//   .then((data) => data.json())
//   .then((res) => console.log(res))
//   .catch();

fetch("http://localhost:3000/users", {
  method: "POST",
  body: JSON.stringify({
    name: "Nikita",
  }),
})
  .then((data) => console.log(data))
  .catch();
