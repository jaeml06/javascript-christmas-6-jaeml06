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

  test('총 주문 금액이 10000원 이하인 경우의 총 혜택 금액', () => {
    const temp = new Event(6, [['타파스', 1], ['제로콜라', 1]]);
    expect(temp.calculateTotalDiscount()).toEqual(0);
  });

  test('총 주문 금액이 11500원 이하인 경우의 총 혜택 금액', () => {
    const temp = new Event(25, [['타파스', 1], ['제로콜라', 2]]);
    expect(temp.calculateTotalDiscount()).toEqual(4400);
  });

  test('총 주문 금액이 10000원 이하인 경우의 총 혜택 금액', () => {
    const temp = new Event(3, [['티본스테이크', 1], ['바비큐립', 1], ['초코케이크', 2],  ['제로콜라', 1]]);
    expect(temp.calculateTotalDiscount()).toEqual(31246);
  });

  test('총 혜택 금액이 5000이상 10000이하인 경우 배지 종류', () => {
    const temp = new Event(25, [['타파스', 1], ['초코케이크', 1]]);
    expect(temp.selectBadge()).toEqual('별');
  });

  test('총 혜택 금액이 10000이상 20000이하인 경우 배지 종류', () => {
    const temp = new Event(25, [['타파스', 1], ['초코케이크', 4]]);
    expect(temp.selectBadge()).toEqual('트리');
  });
});
