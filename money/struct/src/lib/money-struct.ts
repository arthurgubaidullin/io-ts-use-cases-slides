import { Currency } from '@w/currency';
import * as t from 'io-ts';

export type MoneyStruct = t.TypeOf<typeof MoneyStruct>;

export const MoneyStruct = t.readonly(
  t.exact(
    t.type({
      amount: t.Int,
      currency: Currency,
    })
  )
);
