// basic nextjs component template for a header

"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import './header.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    function openNavbar() {
        setIsNavbarOpen(true);
    }

    function closeNavbar() {
        setIsNavbarOpen(false);
    }

    return (
        <div id="header-container" >
            <div id="header-icon-container">
                <Link href="/">
                    <Image src="/images/ieee-logo-blue.png" width={64} height={64} alt="IEEE logo" />
                </Link>
            </div>
            <div id="navbar-hamburger-container">
                <button onClick={openNavbar}>
                    <Image src="/images/hamburger-menu.png" width={64} height={64} alt="menu button for navigation" />
                </button>
            </div>
            <div id="navbar-links-container" className={isNavbarOpen ? 'navbar-is-open' : 'navbar-is-closed'}>
                <Link onClick={closeNavbar} className="navbar-link" href="/">Home</Link>
                <Link onClick={closeNavbar} className="navbar-link" href="/competitions">Competition</Link>
                <Link onClick={closeNavbar} className="navbar-link" href="/past-competitions">Past Competitions</Link>
                <Link onClick={closeNavbar} className="navbar-link" href="/#contact-container">Contact Us</Link>
                <Link onClick={closeNavbar} className="navbar-link button" href="/">Sponsorships</Link>
                <div className="navbar-close">
                    <button onClick={closeNavbar}>
                        <Image src="/images/close.png" width={64} height={64} alt="menu button for closing the navigation" />
                    </button>
                </div>
            </div>
        </div>
    )
}