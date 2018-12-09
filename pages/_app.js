import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { configureStore } from "../store";

//import withReduxStore from '../store/withReduxStore';
import Layout from '../components/layouts/Layout';
import { saveState } from '../utils/session';

const makeStore = (initialState, options) => {
  return configureStore();
};

class KharetaApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentWillUnmount(){
    this.props.store.subscribe(()=> {
      saveState(this.props.store.getState());
    });
  }

  componentDidCatch (error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error)
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }
  
  render () {

    const { Component, pageProps, store } = this.props

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

export default withRedux(makeStore)(KharetaApp);