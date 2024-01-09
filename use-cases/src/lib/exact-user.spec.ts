import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { ExactUser } from './exact-user';

describe('ExactUser', () => {
  it('should remove redundant fields when encode', () =>
    pipe(
      {
        name: 'Artur',
        age: 18,
        sex: 'male',
      },
      ExactUser.encode,
      (result) => expect(result).toStrictEqual({ name: 'Artur', age: 18 })
    ));

  it('should remove redundant fields when decode', () =>
    pipe(
      {
        name: 'Artur',
        age: 18,
        sex: 'male',
      },
      ExactUser.decode,
      (result) =>
        expect(result).toStrictEqual(E.right({ name: 'Artur', age: 18 }))
    ));
});
