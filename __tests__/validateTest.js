import EventControl from '../src/EventControl';
import { Console } from '@woowacourse/mission-utils';

describe('날짜 유효성 검사', () => {
  test.each(['0.9', 'adf', '-123', '31.1'])(
    '날짜가 1 ~ 31 이외면 예외 발생',
    (input) => {
      expect(() => EventControl.isValidateDay(input)).toThrow('[ERROR]');
    }
  );
  test('날짜가 31인 경우', () => {
    expect(EventControl.isValidateDay('31')).toEqual(31);
  });
});

describe('메뉴 유효성 검사', () => {
  test.each([
    [[]], // 비어있는 주문
    [[['햄버거', 3], ['초코케이크', 3]]], // 메뉴에 없는 항목 포함
    [[['양송이수프', 0.1]]], // 수량이 정수가 아닌 경우
    [[['양송이수프', 0]]], // 수량이 0인 경우
    [[['아이스크림', 2], ['아이스크림', 3]]], // 같은 메뉴가 두 번 주문된 경우
    [[['제로콜라', 2], ['레드와인', 3]]], // 음료만 주문된 경우 (규칙에 따라)
    [[['해산물파스타', 10], ['크리스마스파스타', 15]]], // 주문 가능한 최대 수량 초과
  ])('메뉴가 지정 형식 이외면 예외 발생', (input) => {
    Console.print(input);
    expect(() => EventControl.isValidateOrder(input)).toThrow('[ERROR]');
  });

  test('메뉴 유효성 통과 케이스', () => {
    try{
      EventControl.isValidateOrder([['바비큐립', 3], ['초코케이크', 2], ['샴페인', 6]]);
      throw new Error('성공')
    }catch(error){
      expect(error.message).toEqual('성공')
    }
  });
});
