class Buyer {
  #_name;
  #_email;
  constructor(name, email) {
    this.#_name = name;
    this.#_email = email;
  }
  notifyAboutSale(discount) {
    console.log(`${this.#_name} ${this.#_email} for you discout ${discount}%`);
  }
}
export { Buyer };
