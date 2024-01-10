import * as t from 'io-ts';
import { Positive } from '@w/number/positive';

export type PositiveInt = t.TypeOf<typeof PositiveInt>;

export const PositiveInt = t.intersection([t.Int, Positive]);
