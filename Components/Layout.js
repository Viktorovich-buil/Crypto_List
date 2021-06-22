import Head from "next/head";
import Link from 'next/link';
import logo from '../Components/img/logo.png'
import Image from 'next/image'
import React from "react";


const Layout = ({children, title = 'Crypto'}) => {
    return (
        <div className='Layout'>
            <Head>
                <title>{title}</title>
            </Head>
            <header className='header'>
                <Link href='/' passHref >
                    <a>
                        <Image src={logo} alt='logoimg'/>
                    </a>
                </Link>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;
