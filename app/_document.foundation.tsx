import Document from 'next/document';
import { Html, Head, Main, NextScript } from 'next/document';

import { E } from '@/electrons';

import { getInitialProps } from './_document.foundation.backend';

/**
 * Frontend
 */
export default class AppDocument extends Document {
  override render() {
    return (
      <Html lang="en">
        <Head />
        <E.Body>
          <Main />
          <NextScript />
        </E.Body>
      </Html>
    );
  }
}

export { getInitialProps };
