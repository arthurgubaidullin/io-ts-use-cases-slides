import * as t from 'io-ts';
import { ZeroOrPositiveInt } from '@w/zero-or-positive-int';

export type Amount = t.TypeOf<typeof Amount>;

export const Amount = ZeroOrPositiveInt;

export const create = (data: { amount: number }): Amount =>
  ZeroOrPositiveInt.is(data.amount) ? data.amount : 0;

export const add = (amount1: Amount, amount2: Amount): Amount =>
  (amount1 + amount2) as Amount;
