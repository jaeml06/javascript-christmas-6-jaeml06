import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Message.js";

const OutputView = {
  printIntroduce() {
    Console.print(MESSAGE.introduce);
  },
  printPreview() {
    Console.print(MESSAGE.preview);
  },
  printMenu(order = []) {
    Console.print(MESSAGE.menuTitle);
    order.forEach(([item, count]) => {
      Console.print(`${item} ${count}${MESSAGE.numberUnit}`);
    });
  },
  printTotalPrice(totalPrice = 0) {
    Console.print(MESSAGE.totalPriceTitle);
    Console.print(`${totalPrice.toLocaleString()}${MESSAGE.won}`);
  },
  printGiveawayEvent(flag = false){
    Console.print(MESSAGE.giveawayEventTitle)
    if(flag){
      Console.print(MESSAGE.giveawayEvent)
      return;
    }
    Console.print(MESSAGE.noneEvent);
  },
  printDiscountListTitle(){
    Console.print(MESSAGE.eventListTitle);
  },
  printChristmasDdayDiscount(price = 0){
    if(price !== 0){
      Console.print(`${MESSAGE.ChristmasDdayDisCount}${price.toLocaleString()}${MESSAGE.won}`)
    }
  },
  printWeekdayDiscount(price = 0){
    if(price !== 0){
      Console.print(`${MESSAGE.weekdayDiscount}${price.toLocaleString()}${MESSAGE.won}`)
    }
  },
  printWeekendDiscount(price = 0){
    if(price !== 0){
      Console.print(`${MESSAGE.weekendDiscount}${price.toLocaleString()}${MESSAGE.won}`)
    }
  },
  printSpecialDiscount(price = 0){
    if(price !== 0){
      Console.print(`${MESSAGE.specialDiscount}${price.toLocaleString()}${MESSAGE.won}`)
    }
  },
  printGivewayDiscount(){
    Console.print(MESSAGE.givewayDiscount);
  },
  printNonEvent(){
    Console.print(MESSAGE.noneEvent);
  },
  printTotalDisCount(price = 0){
    Console.print(MESSAGE.totalDiscountTitle);
    if(price !== 0){
      Console.print(`${MESSAGE.minus}${price.toLocaleString()}${MESSAGE.won}`);
      return;
    }
    Console.print(`0${MESSAGE.won}`);
  },
  printTotalDisCountPrice(price = 0){
    Console.print(MESSAGE.totalDiscountPriceTitle)
    Console.print(`${price.toLocaleString()}${MESSAGE.won}`);
  },
  printEventBadge(badge = ''){
    Console.print(MESSAGE.eventBadgeTitle);
    Console.print(badge);
  }
};

export default OutputView;
