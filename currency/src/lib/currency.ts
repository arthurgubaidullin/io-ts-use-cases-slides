import * as t from 'io-ts';

export type Currency = t.TypeOf<typeof Currency>;

export const Currency = t.keyof({ USD: null, GEL: null });
