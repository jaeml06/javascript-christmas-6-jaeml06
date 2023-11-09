import { MESSAGE } from "./message";

const OutputView = {
    printIntroduce(){
        Console.print(MESSAGE.introduce);
    },
    printMenu() {
        Console.print("<주문 메뉴>");
        // ...
    }
    // ...
}

export default OutputView;
