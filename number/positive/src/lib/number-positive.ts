import * as t from 'io-ts';

export interface PositiveBrand {
  readonly Positive: unique symbol;
}

export const Positive = t.brand(
  t.number,
  (n): n is t.Branded<number, PositiveBrand> => 0 < n,
  'Positive'
);

export type Positive = t.TypeOf<typeof Positive>;
