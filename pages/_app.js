// pages/_app.js
import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import {makeStore} from "../store/persist";
import {PersistGate} from 'redux-persist/integration/react';

export default withRedux(makeStore, {debug: true})(class MyApp extends App {

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </Container>

        );
    }

});