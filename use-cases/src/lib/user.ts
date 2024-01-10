import { identity } from 'fp-ts/function';
import * as t from 'io-ts';

export type User = {
  name: string;
  age: number;
};

export type DecodedUser = t.TypeOf<typeof User>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _: (u: User) => DecodedUser = identity;

export const User = t.type({
  name: t.string,
  age: t.number,
});
