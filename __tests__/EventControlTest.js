import EventControl from '../src/EventControl';

describe('메뉴 배열 생성 검사', () => {
  test('스테이크-2,콜라-3 메뉴 입력', () => {
    expect(EventControl.orderToArray('스테이크-2,콜라-3')).toEqual([['스테이크', 2], ['콜라', 3]]);
  });
});
