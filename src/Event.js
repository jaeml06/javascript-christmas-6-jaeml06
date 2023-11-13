import { MENU, ONLYDESSERT, ONLYMAIN } from "./Menu";
import { MESSAGE } from "./Message";

export default class Event {
  #day;
  #order;
  #weekday;

  constructor(day = 0, order = []) {
    this.#day = day;
    this.#order = order;
    this.#weekday = new Date(2023, 11, this.#day).getDay();
  }

  calculateTotalPrice() {
    let total = 0;
    this.#order.forEach(([name, count]) => {
      total += MENU[name] * count;
    });
    return total;
  }

  getOrder() {
    return JSON.parse(JSON.stringify(this.#order));
  }

  isCheckGiveawayEvent() {
    if (this.calculateTotalPrice() >= 12000) {
      return true;
    }
    return false;
  }

  calculateDiscountForDay() {
    if (this.#day >= 1 && this.#day <= 25) {
      return 1000 + (this.#day - 1) * 100;
    }
    return 0;
  }

  calculateWeekdayDiscount() {
    if (this.#weekday >= 0 && this.#weekday <= 4) {
      return this.#order.reduce((acc, [name, count]) => {
        return acc + (ONLYDESSERT.includes(name) ? 2023 * count : 0);
      }, 0);
    }
    return 0;
  }

  calculateWeekendDiscount() {
    if (this.#weekday === 5 || this.#weekday === 6) {
      return this.#order.reduce((acc, [name, count]) => {
        return acc + (ONLYMAIN.includes(name) ? 2023 * count : 0);
      }, 0);
    }
    return 0;
  }

  calculateSpecialDiscount() {
    if (this.#weekday === 0 || this.#day === 25) {
      return 1000;
    }
    return 0;
  }

  calculateGivewayDiscount() {
    if (this.isCheckGiveawayEvent()) {
      return 25000;
    }
    return 0;
  }

  calculateTotalDiscount() {
    if (this.calculateTotalPrice() < 10000) {
      return 0;
    }
    return (
      this.calculateDiscountForDay() +
      this.calculateWeekdayDiscount() +
      this.calculateWeekendDiscount() +
      this.calculateSpecialDiscount() +
      this.calculateGivewayDiscount()
    );
  }

  calculateTotalDiscountPrice(){
    let totalDiscountPrice = this.calculateTotalPrice() - this.calculateTotalDiscount();
    if(this.isCheckGiveawayEvent()){
      totalDiscountPrice += 25000;
    }
    return totalDiscountPrice;
  }

  selectBadge(){
    const discount = this.calculateTotalDiscount();
    if(discount >= 20000){
      return MESSAGE.santaBadge;
    }
    else if(discount >= 10000){
      return MESSAGE.treeBadge;
    }
    else if(discount >= 5000){
      return MESSAGE.starBadge;
    }
    return MESSAGE.noneEvent;
  }
}
