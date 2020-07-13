import React from 'react';
import Footer from './Footer';
import FooterVN from './FooterVN';
import {useRouter} from 'next/router';

const CheckFooter = () => {
    const nextRouter = useRouter();
    const {pathname} = nextRouter;
    const footerCheck = pathname.includes('/vn');
    return (
        <>
            {footerCheck ? <FooterVN /> : <Footer />}
        </>
    )
}

export default CheckFooter;