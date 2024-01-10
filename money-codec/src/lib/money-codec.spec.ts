import { pipe } from 'fp-ts/function';
import { Money } from '@w/money';
import { MoneyCodec } from './money-codec';
import * as E from 'fp-ts/Either';
import * as PathReporter from 'io-ts/PathReporter';
import * as t from 'io-ts';

const money = new Money({ amount: 10 as t.Int, currency: 'GEL' });

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
