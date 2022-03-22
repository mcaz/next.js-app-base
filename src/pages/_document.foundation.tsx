import Document from 'next/document';

import { getInitialProps } from './_document.foundation.entry';
import E from '~/components/elements';

/**
 * Client Side
 */
export default class AppDocument extends Document {
  override render() {
    return (
      <E.NextHtml lang="en">
        <E.NextDocumentHead />
        <E.Body>
          <E.NextMain />
          <E.NextScript />
        </E.Body>
      </E.NextHtml>
    );
  }
}

export { getInitialProps };
