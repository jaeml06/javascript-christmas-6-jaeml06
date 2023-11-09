import EventControl from "../src/EventControl";

describe('날짜 유효성 검사', () => {
  test.each(['0.9', 'adf', '-123', '31.1'])('날짜가 1 ~ 31 이외면 예외 발생', (input) => {
    expect(() => EventControl.isValidateDay(input)).toThrow('[ERROR]');
  });
  test('날짜가 31인 경우',() => {
    expect(EventControl.isValidateDay('31')).toEqual(31);
  })
});
