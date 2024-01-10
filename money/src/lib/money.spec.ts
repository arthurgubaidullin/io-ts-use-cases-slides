import { pipe } from 'fp-ts/function';
import { Int } from 'io-ts';
import { Money } from './money';

const GEL = 'GEL';

describe('Money', () => {
  it('should create money', () => {
    return pipe(new Money({ amount: 1 as Int, currency: GEL }), (a) => {
      expect(a.amount).toEqual(1);
      expect(a.currency).toEqual(GEL);
    });
  });
});
