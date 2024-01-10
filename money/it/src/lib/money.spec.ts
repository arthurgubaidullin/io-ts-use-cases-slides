import { ZeroOrPositiveInt } from '@w/zero-or-positive-int';
import { pipe } from 'fp-ts/function';
import { Money } from './money';

const GEL = 'GEL';

describe('Money', () => {
  it('should create money', () => {
    return pipe(
      new Money({ amount: 1 as ZeroOrPositiveInt, currency: GEL }),
      (a) => {
        expect(a.amount).toEqual(1);
        expect(a.currency).toEqual(GEL);
      }
    );
  });
});
