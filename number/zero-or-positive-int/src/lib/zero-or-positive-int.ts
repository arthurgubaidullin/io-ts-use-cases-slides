import { PositiveInt } from '@w/number/positive-int';
import * as t from 'io-ts';

export type ZeroOrPositiveInt = t.TypeOf<typeof ZeroOrPositiveInt>;

export const ZeroOrPositiveInt = t.union([t.literal(0), PositiveInt]);
