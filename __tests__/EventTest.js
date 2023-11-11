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

  test('day가 3일 경우 크리스마스 디데이 할인 금액 계산', () => {
    const temp = new Event(3, [['바비큐립', 3], ['초코케이크', 2]]);
    expect(temp.calculateDiscountForDay()).toEqual(1200);
  });

  test('day가 4, 디저트 메뉴가 2개인 경우 경우 평일 할인 금액 계산', () => {
    const temp = new Event(4, [['바비큐립', 3], ['초코케이크', 2]]);
    expect(temp.calculateWeekdayDiscount()).toEqual(4046);
  });

  test('day가 2, 메인메뉴가 3개인 경우 경우 평일 할인 금액 계산', () => {
    const temp = new Event(2, [['바비큐립', 3], ['초코케이크', 2]]);
    expect(temp.calculateWeekendDiscount()).toEqual(6069);
  });

  test.each([10, 25])('day가 별표가 있는 날일 때 ', (input) => {
    const temp = new Event(input, [['바비큐립', 3], ['초코케이크', 2]]);
    expect(temp.calculateSpecialDiscount()).toEqual(1000);
  });
});
