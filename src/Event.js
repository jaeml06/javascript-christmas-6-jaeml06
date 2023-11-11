import { MENU, ONLYDESSERT, ONLYMAIN } from "./Menu";

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

  isCheckGiveawayEvent(){
    if(this.calculateTotalPrice() >= 12000){
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
    const weekday = new Date(2023, 11, this.#day).getDay();
    if (weekday >= 0 && weekday <= 3) {
      return this.#order.reduce((acc, [name, count]) => {
        return acc + (ONLYDESSERT.includes(name) ? 2023 * count : 0);
      }, 0);
    }
    return 0;
  }

  calculateWeekendDiscount() {
    const weekday = new Date(2023, 11, this.#day).getDay();
    if (weekday === 5 || weekday === 6) { // 금요일과 토요일
      return this.#order.reduce((acc, [name, count]) => {
        return acc + (ONLYMAIN.includes(name) ? 2023 * count : 0);
      }, 0);
    }
    return 0;
  }
}