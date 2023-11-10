import Event from "../src/Event";

describe('Event class 검사', () => {
  test('할인 전 총주문 금액 계산 ', () => {
    const temp = new Event(3, [['바비큐립', 3], ['초코케이크', 2]]);
    expect(temp.calculateTotalPrice()).toEqual(192000);
  });
});
