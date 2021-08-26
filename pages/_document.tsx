import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang={'cs'}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap"
                rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={'font-primary text-base'}>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument