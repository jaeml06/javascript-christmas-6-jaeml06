import { MENU } from "./Menu";

export default class Event {
  #day;
  #order;

  constructor(day = 0, order = []) {
    this.#day = day;
    this.#order = order;
  }

  calculateTotalPrice(){
    let total = 0;
    this.#order.forEach(([name, count]) =>{
      total += MENU[name] * count;
    });
    return total;
  }

  getOrder(){
    return JSON.parse(JSON.stringify(this.#order));
  }
}
