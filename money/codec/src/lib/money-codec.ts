import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as t from 'io-ts';
import { Money } from '@w/money';
import { MoneyStruct } from '@w/money-struct';

export const MoneyCodec = new t.Type<Money, MoneyStruct, unknown>(
  'Money',
  (a): a is Money => a instanceof Money,
  (u, c) =>
    pipe(
      MoneyStruct.validate(u, c),
      E.map((struct) => new Money(struct))
    ),
  ({ amount, currency }) => ({ amount, currency })
);
