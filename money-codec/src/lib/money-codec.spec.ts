import { moneyCodec } from './money-codec';

describe('moneyCodec', () => {
  it('should work', () => {
    expect(moneyCodec()).toEqual('money-codec');
  });
});
