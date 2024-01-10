import { Currency } from '@w/currency';
import { ZeroOrPositiveInt } from '@w/zero-or-positive-int';
import * as t from 'io-ts';

export type MoneyStruct = t.TypeOf<typeof MoneyStruct>;

export const MoneyStruct = t.readonly(
  t.exact(
    t.type({
      amount: ZeroOrPositiveInt,
      currency: Currency,
    })
  )
);
