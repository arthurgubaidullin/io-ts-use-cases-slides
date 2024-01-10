import { Positive } from './number-positive';

describe('NumberPositive', () => {
  describe('is', () => {
    it('should return true when 1', () => {
      expect(Positive.is(1)).toBeTruthy();
    });

    it('should return false when -1', () => {
      expect(Positive.is(-1)).toBeFalsy();
    });

    it('should return false when 0', () => {
      expect(Positive.is(0)).toBeFalsy();
    });
  });
});
