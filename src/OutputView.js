import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Message";

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
    Console.print(`${totalPrice}${MESSAGE.won}`);
  },
  printGiveawayEvent(flag = false){
    Console.print(MESSAGE.giveawayEventTitle)
    if(flag){
      Console.print(MESSAGE.giveawayEvent)
      return;
    }
    Console.print(MESSAGE.noneEvent);
  },
  printChristmasDdayDiscount(price = 0){
    if(price !== 0){
      Console.print(`${MESSAGE.ChristmasDdayDisCount}${price}${MESSAGE.won}`)
    }
  },
  printWeekdayDiscount(price = 0){
    if(price !== 0){
      Console.print(`${MESSAGE.weekdayDiscount}${price}${MESSAGE.won}`)
    }
  },
  printWeekendDiscount(price = 0){
    if(price !== 0){
      Console.print(`${MESSAGE.weekendDiscount}${price}${MESSAGE.won}`)
    }
  },
  printSpecialDiscount(price = 0){
    if(price !== 0){
      Console.print(`${MESSAGE.specialDiscount}${price}${MESSAGE.won}`)
    }
  },
  printGivewayDiscount(price = 0){
    if(price !== 0){
      Console.print(MESSAGE.givewayDiscount);
    }
  },
  printNonEvent(){
    Console.print(MESSAGE.noneEvent);
  },
  printTotalDisCount(price = 0){
    Console.print(MESSAGE.totalDiscountTilte);
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
};

export default OutputView;
