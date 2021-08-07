import React, { FC, useEffect, Fragment } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import  { wrapper }  from '../redux/store';

const Noop: FC = ({ children }) => <>{children}</>
// const store = configureStore();
function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <Fragment>
      <Head />
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
    </Fragment>
  )
}
export default wrapper.withRedux(MyApp);
