import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./message";

const OutputView = {
    printIntroduce(){
        Console.print(MESSAGE.introduce);
    },
    printPreview(){
        Console.print(MESSAGE.preview);
    },
    printMenu(order = []) {
        Console.print('<주문 메뉴>');
        order.forEach(([item, count]) => {
            Console.print(`${item} ${count}${MESSAGE.numberUnit}`)
        })
        
    },
    printTotalPrice(totalPrice = 0){
        Console.print('<할인 전 총주문 금액>');
        Console.print(`${totalPrice}${MESSAGE.won}`);
    }
    // ...
}

export default OutputView;
