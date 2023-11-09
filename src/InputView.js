import { MESSAGE } from "./message";

export default InputView = {
    async readDay() {
        const input = await Console.readLineAsync(MESSAGE.queryDay);
        return input;
    }

    async readOrder(){
        const input = await Console.readLineAsync(MESSAGE.queryOrder);
        
    }
    // ...
}
