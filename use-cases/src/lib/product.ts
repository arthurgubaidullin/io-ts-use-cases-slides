import * as t from 'io-ts';
import { NonEmptyString, optionFromNullable } from 'io-ts-types';

export type Product = t.TypeOf<typeof Product>;

export const Product = t.strict({
  name: NonEmptyString,
  description: optionFromNullable(NonEmptyString),
});
