import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView';
import OutputView from './OutputView';
import { MESSAGE } from './Message';
import { MENU, ONLYDRINK } from './Menu';
import Event from './Event';

class EventControl {
  async start() {
    OutputView.printIntroduce();
    const day = await this.getValidateDay();
    const menu = await this.getValidateOrder();
    const event = new Event(day, menu);
    EventControl.printResult(event)
  }

  async getValidateDay() {
    while (true) {
      try {
        const day = await InputView.readDay();
        return EventControl.isValidateDay(day);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static isValidateDay(day = '') {
    if (!Number.isInteger(Number(day)) || Number(day) < 1 || Number(day) > 31) {
      throw new Error(MESSAGE.dayError);
    }
    return Number(day);
  }

  async getValidateOrder() {
    while (true) {
      try {
        const order = await InputView.readOrder();
        const orderArray = EventControl.orderToArray(order);
        EventControl.isValidateOrder(orderArray);
        return orderArray;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static orderToArray(order = '') {
    const orderArray = order.split(',').map((value) => {
      const temp = value.split('-');
      return [temp[0], Number(temp[1])];
    });
    return orderArray;
  }

  static checkMenuItem(item, count, menuCount) {
    if (!Object.keys(MENU).includes(item) || !Number.isInteger(count) || count < 1 || menuCount.has(item)) {
      throw new Error(MESSAGE.orderError);
    }
    menuCount.add(item);
  }

  static isValidateOrder(order = []) {
    const menuCount = new Set();
    let totalItem = 0;
    let drinkOnly = true;
    if(order.length === 0) throw new Error(MESSAGE.orderError);
    order.forEach(([name, count]) => {
      EventControl.checkMenuItem(name, count, menuCount);
      if (!ONLYDRINK.includes(name)) drinkOnly = false;
      totalItem += count;
      if (totalItem > MESSAGE.maxOrderCount) throw new Error(MESSAGE.orderError);
    });
    if (drinkOnly) {
      throw new Error(MESSAGE.orderError);
    }
  }

  static printResult(event = {}){
    OutputView.printPreview();
    OutputView.printMenu(event.getOrder());
    OutputView.printTotalPrice(event.calculateTotalPrice());
    
  }
}

export default EventControl;