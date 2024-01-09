import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { DateFromISOString } from 'io-ts-types';
import * as PathReporter from 'io-ts/PathReporter';

describe('Date', () => {
  it('should encode & decode date', () => {
    const date = new Date();
    return pipe(
      date,
      DateFromISOString.encode,
      DateFromISOString.decode,
      E.mapLeft(PathReporter.failure),
      E.fold(
        (es) => {
          throw new Error(es.join('\n'));
        },
        (_date) => {
          expect(_date).toEqual(date);
        }
      )
    );
  });

  it('should decode no date when input invalid', () => {
    return pipe(
      'super duper date',
      DateFromISOString.decode,
      E.mapLeft(PathReporter.failure),
      E.fold(
        (es) => {
          expect(es).toBeDefined();
        },
        () => {
          throw new Error();
        }
      )
    );
  });
});
