import * as React from 'react';
import useFooterStyle from './FooterStyle';

function Footer() {
    const { wrapper } = useFooterStyle();

    return <footer className={wrapper} />
}


export default Footer