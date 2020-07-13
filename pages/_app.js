import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer/index.js';
import GlobalStyles from '../components/GlobalStyles';
import Router from '../components/Router'
import 'swiper/swiper-bundle.css';


class Layout extends React.Component {
    render () {
        const { children } = this.props
        return <div className='layout'>{children}</div>
    }
}


class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <div>
                    <Header />
                    <main>
                        <Component {...other} />
                        <GlobalStyles />
                    </main>
                    <Footer />
                </div>
            </Container>
        );
    }
}

export default RootApp