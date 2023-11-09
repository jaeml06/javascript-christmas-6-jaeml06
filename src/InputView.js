import { MESSAGE } from "./message";

const InputView = {
    async readDay() {
        const input = await Console.readLineAsync(MESSAGE.queryDay);
        return input;
    },

    async readOrder(){
        const input = await Console.readLineAsync(MESSAGE.queryOrder);
        return input;
    }
    // ...
}
export default InputView;
