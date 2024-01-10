import { pipe } from 'fp-ts/function';

const one = (): 1 => 1;

const increment = (n: number): number => n + 1;

describe('pipe', () => {
  it('without pipe', () => {
    expect(one()).toEqual(1);
    expect(increment(one())).toEqual(2);
    expect(increment(increment(one()))).toEqual(3);
    expect(increment(increment(increment(one())))).toEqual(4);
    expect(increment(increment(increment(increment(one()))))).toEqual(5);
  });

  it('with pipe', () => {
    expect(one()).toEqual(1);
    expect(pipe(one(), increment)).toEqual(2);
    expect(pipe(one(), increment, increment)).toEqual(3);
    expect(pipe(one(), increment, increment, increment)).toEqual(4);
    expect(pipe(one(), increment, increment, increment, increment)).toEqual(5);
  });
});
