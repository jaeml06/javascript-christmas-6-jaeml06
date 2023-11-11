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
    Console.print(MESSAGE.noneEvent)
    if(flag){
      Console.print(MESSAGE.giveawayEvent)
    }
    Console.print(MESSAGE.noneEvent);
  }
  // ...
};

export default OutputView;
