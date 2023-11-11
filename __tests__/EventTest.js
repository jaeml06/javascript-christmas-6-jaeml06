import Event from "../src/Event";

describe('Event class 검사', () => {
  test('할인 전 총주문 금액 계산 ', () => {
    const temp = new Event(3, [['바비큐립', 3], ['초코케이크', 2]]);
    expect(temp.calculateTotalPrice()).toEqual(192000);
  });

  test('총 주문 금액 12만원 시 증정 메뉴 증정', () => {
    const temp = new Event(3, [['바비큐립', 3], ['초코케이크', 2]]);
    expect(temp.isCheckGiveawayEvent()).toEqual(true);
  });

  test('day가 3일 경우', () => {
    const temp = new Event(3, [['바비큐립', 3], ['초코케이크', 2]]);
    expect(temp.calculateDiscountForDay()).toEqual(1200);
  });
  
});
