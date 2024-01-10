import * as t from 'io-ts';

export type Amount = t.TypeOf<typeof Amount>;

export const Amount = t.Int;

export const create = (data: { amount: number }): Amount =>
  Math.max(0, data.amount) as Amount;

export const add = (amount1: Amount, amount2: Amount): Amount =>
  (amount1 + amount2) as Amount;
