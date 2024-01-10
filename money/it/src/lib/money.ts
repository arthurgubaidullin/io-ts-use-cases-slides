import { Currency } from '@w/currency';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as Amount from './amount';
import { CurrencyMismatch } from './currency-mismatch';
import { MoneyStruct } from './money-struct';
import { Eq } from './eq';

export class Money {
  public readonly amount: Amount.Amount;
  public readonly currency: Currency;

  constructor(struct: MoneyStruct) {
    this.amount = Amount.create(struct);
    this.currency = struct.currency;
  }

  public readonly add = (money: Money): E.Either<CurrencyMismatch, Money> => {
    return pipe(
      money,
      E.fromPredicate(
        (money) => money.currency === this.currency,
        () => new CurrencyMismatch()
      ),
      E.map(
        (money) =>
          new Money({
            amount: Amount.add(this.amount, money.amount),
            currency: this.currency,
          })
      )
    );
  };

  public equals(b: Money): boolean {
    return Eq.equals(this, b);
  }
}
