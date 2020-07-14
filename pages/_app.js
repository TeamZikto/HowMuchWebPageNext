import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer/index.js';
import NProgress from 'nprogress';
// import GlobalStyles from '../components/GlobalStyles';
import Router from 'next/router';
import 'swiper/swiper-bundle.css';
import moment from 'moment';
import Helmet from 'react-helmet';


class Layout extends React.Component {
    render () {
        const { children } = this.props
        return <div className='layout'>{children}</div>
    }
}
moment.locale('ko');

Router.events.on('routeChangeStart', (url) => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Helmet title="얼마야 - 촬영하면 돈이된다." />
                <Layout {...other} {...this.state}>
                    <Header />
                    <main>
                        <Component {...other} />
                        {/* <GlobalStyles /> */}
                    </main>
                    <Footer />
                </Layout>
            </Container>
        );
    }
}

export default RootApp