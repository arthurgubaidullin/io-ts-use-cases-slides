import { Currency } from '@w/currency';
import { Int } from 'io-ts';

export type MoneyStruct = Readonly<{
  amount: Int;
  currency: Currency;
}>;
