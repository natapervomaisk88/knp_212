import EventEmitter from "node:events";
const emitter = new EventEmitter();

emitter.on("click", (data) => {
  console.log("Clicked...", data);
});

emitter.emit("click", { title: "Add Product", width: "100px", height: "70px" });
emitter.emit("click2", { title: "Cancel", width: "100px", height: "70px" });

/*
Задача: Зробити класс Buyer. Поля email, name
Створити масив покупців та підписати їх на подію "sale"
Як тільки подія станеться треба сповістити всіх про неї та при цьому
у консолі побачити повідомлення
Ім'я покупця, email покупця, розмір знижки
*/
