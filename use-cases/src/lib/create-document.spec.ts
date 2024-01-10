import { createDocument } from './create-document';

describe('create-document', () => {
  it('should create document', () => {
    createDocument(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      'test',
      { name: 'lol' }
    );
  });
});
