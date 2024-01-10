import { Document, DocumentId } from './document';

export const createDocument = (id: DocumentId, doc: Document) => {
  console.log(id, doc);
};
