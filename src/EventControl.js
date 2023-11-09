import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView';
import OutputView from './OutputView';
import { MESSAGE } from './message';

class EventControl {
  async start() {
    OutputView.printIntroduce();
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
      throw new Error(MESSAGE.dayError)
    }
    return Number(day);
  }
}

export default EventControl;
