import * as t from 'io-ts';

export type ExactUser = t.TypeOf<typeof ExactUser>;

export const ExactUser = t.exact(
  t.type({
    name: t.string,
    age: t.number,
  })
);
