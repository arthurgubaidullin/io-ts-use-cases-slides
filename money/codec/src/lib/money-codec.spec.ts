import { Money } from '@w/money';
import { ZeroOrPositiveInt } from '@w/zero-or-positive-int';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as PathReporter from 'io-ts/PathReporter';
import { MoneyCodec } from './money-codec';

const money = new Money({ amount: 10 as ZeroOrPositiveInt, currency: 'GEL' });

describe('Money', () => {
  it('should encode & decode money class', () =>
    pipe(
      money,
      MoneyCodec.encode,
      MoneyCodec.decode,
      E.mapLeft(PathReporter.failure),
      E.fold(
        (es) => {
          throw new Error(es.join('\n'));
        },
        (_money) => {
          expect(_money).toBeInstanceOf(Money);
          expect(_money.equals(money)).toBeTruthy();
        }
      )
    ));
});
