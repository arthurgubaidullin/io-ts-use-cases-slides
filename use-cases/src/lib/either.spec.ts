import * as E from 'fp-ts/Either';
import { identity, pipe } from 'fp-ts/function';

const pirojok = 'pirojok';
const cake = 'cake';

describe('Either', () => {
  it('should construct right string', () => {
    const result = E.right(pirojok);

    expect(E.isRight(result)).toBeTruthy();
  });

  it('should construct left string', () => {
    const result = E.left(cake);

    expect(E.isLeft(result)).toBeTruthy();
  });

  it('should return uppercase string', () => {
    const result = pipe(
      E.right(pirojok),
      E.map((s) => s.toUpperCase())
    );

    expect(result).toEqual(E.right('PIROJOK'));
  });

  it('should return left uppercase string', () => {
    const result = pipe(
      E.left(cake),
      E.mapLeft((s) => s.toUpperCase())
    );

    expect(result).toEqual(E.left('CAKE'));
  });

  it('should return left string', () => {
    const result = pipe(
      E.left(cake) satisfies E.Either<string, string>,
      E.map((s) => s.toUpperCase())
    );

    expect(result).toEqual(E.left(cake));
  });

  it('should fold either right value or throw', () => {
    const result = pipe(
      E.right(pirojok),
      E.fold(() => {
        throw new Error();
      }, identity)
    );

    expect(result).toEqual(pirojok);
  });
});
