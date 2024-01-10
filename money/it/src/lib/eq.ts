import { Eq as _Eq, eqStrict, struct } from 'fp-ts/Eq';
import { Money } from './money';

export const Eq: _Eq<Money> = struct({
  amount: eqStrict,
  currency: eqStrict,
});
