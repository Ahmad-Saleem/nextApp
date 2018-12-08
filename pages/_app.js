import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from "react-redux";
import { configureStore } from "../store";

import withReduxStore from '../store/withReduxStore';
import Layout from '../components/layouts/Layout';

const store = configureStore();
class KharetaApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidCatch (error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error)
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }
  
  render () {

    const { Component, pageProps } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(KharetaApp);