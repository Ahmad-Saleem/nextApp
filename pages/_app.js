import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/layouts/Layout';

export default class KharetaApp extends App {

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Container>
    )
  }
}