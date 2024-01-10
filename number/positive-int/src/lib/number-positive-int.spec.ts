import { PositiveInt } from './number-positive-int';

describe('PositiveInt', () => {
  describe('is', () => {
    it('should return true when valid input', () => {
      expect(PositiveInt.is(1)).toBeTruthy();
    });

    it('should return false when invalid input', () => {
      expect(PositiveInt.is(1.1)).toBeFalsy();
      expect(PositiveInt.is(0)).toBeFalsy();
      expect(PositiveInt.is(-1.1)).toBeFalsy();
    });
  });
});
