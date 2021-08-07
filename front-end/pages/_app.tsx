import React, { FC, useEffect, Fragment } from 'react'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import { Head } from '@components/common'
import  { configureStore }  from '../redux/store';

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
          {/* <Provider store = {store}> */}
          <Component {...pageProps} />
          {/* </Provider > */}
        </Layout>
    </Fragment>
  )
}
export default MyApp;
