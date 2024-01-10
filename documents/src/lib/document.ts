import * as t from 'io-ts';
import { NonEmptyString } from 'io-ts-types';

interface DocumentIdBrand {
  readonly DocumentId: unique symbol;
}

export type DocumentId = t.TypeOf<typeof DocumentId>;

export const DocumentId = t.brand(
  NonEmptyString,
  (_): _ is t.Branded<NonEmptyString, DocumentIdBrand> => true,
  'DocumentId'
);

export type Document = t.TypeOf<typeof Document>;

export const Document = t.strict({
  name: t.string,
});
