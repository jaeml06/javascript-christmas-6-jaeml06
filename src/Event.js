import { MENU, ONLYDESSERT, ONLYMAIN } from "./Menu";
import { MESSAGE } from "./Message";

export default class Event {
  #day;
  #order;
  #weekday;

  constructor(day = 0, order = []) {
    this.#day = day;
    this.#order = order;
    this.#weekday = new Date(MESSAGE.eventYear, MESSAGE.eventMonth, this.#day).getDay();
  }

  calculateTotalPrice() {
    let total = 0;
    this.#order.forEach(([name, count]) => {
      total += MENU[name] * count;
    });
    return total;
  }
  
  getDay(){
    return `${this.#day}`;
  }

  getOrder() {
    return JSON.parse(JSON.stringify(this.#order));
  }

  isCheckGiveawayEvent() {
    if (this.calculateTotalPrice() >= MESSAGE.givewayBoundary) {
      return true;
    }
    return false;
  }

  calculateDiscountForDay() {
    if (this.#day >= MESSAGE.startDday && this.#day <= MESSAGE.endDday) {
      return MESSAGE.DdayBasePrice + (this.#day - 1) * MESSAGE.DdayIncreasePrice;
    }
    return 0;
  }

  calculateWeekdayDiscount() {
    if (this.#weekday >= MESSAGE.sundays && this.#weekday <= MESSAGE.thursdays) {
      return this.#order.reduce((acc, [name, count]) => {
        return acc + (ONLYDESSERT.includes(name) ? MESSAGE.eventYear * count : 0);
      }, 0);
    }
    return 0;
  }

  calculateWeekendDiscount() {
    if (this.#weekday === MESSAGE.fridays || this.#weekday === MESSAGE.saturdays) {
      return this.#order.reduce((acc, [name, count]) => {
        return acc + (ONLYMAIN.includes(name) ? MESSAGE.eventYear * count : 0);
      }, 0);
    }
    return 0;
  }

  calculateSpecialDiscount() {
    if (this.#weekday === MESSAGE.sundays || this.#day === MESSAGE.christmasDay) {
      return MESSAGE.specialDiscountPrice;
    }
    return 0;
  }

  calculateGivewayDiscount() {
    if (this.isCheckGiveawayEvent()) {
      return MESSAGE.givewayPrice;
    }
    return 0;
  }

  calculateTotalDiscount() {
    if (this.calculateTotalPrice() < MESSAGE.discountBoundary) {
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
      totalDiscountPrice += MESSAGE.givewayPrice;
    }
    return totalDiscountPrice;
  }

  selectBadge(){
    const discount = this.calculateTotalDiscount();
    if(discount >= MESSAGE.santaBadgeBoundary){
      return MESSAGE.santaBadge;
    }
    else if(discount >= MESSAGE.treeBadgeBoundary){
      return MESSAGE.treeBadge;
    }
    else if(discount >= MESSAGE.starBadgeBoundary){
      return MESSAGE.starBadge;
    }
    return MESSAGE.noneEvent;
  }
}
