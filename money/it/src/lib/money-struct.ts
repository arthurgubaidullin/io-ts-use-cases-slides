import { Currency } from '@w/currency';
import { ZeroOrPositiveInt } from '@w/zero-or-positive-int';

export type MoneyStruct = Readonly<{
  amount: ZeroOrPositiveInt;
  currency: Currency;
}>;
