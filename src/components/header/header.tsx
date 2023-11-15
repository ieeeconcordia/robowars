// basic nextjs component template for a header

import React from 'react';
import Image from 'next/image';
import './header.css';

export default function Header() {
    return (
        <div id="header-container">
            <div id="header-icon-container">
                <a href="/">
                    <Image src="/images/ieee-logo-blue.png" width={64} height={64} alt="IEEE logo" />
                </a>
            </div>
            <div id="header-hamburger-container">
                <a href="/">
                    <Image src="/images/hamburger-menu.png" width={64} height={64} alt="menu button for " />
                </a>
            </div>
            <div id="header-links-container">
                <a className="header-link" href="/">Home</a>
                <a className="header-link" href="/competitions">Competition</a>
                <a className="header-link" href="/past-competitions">Past Competitions</a>
                <a className="header-link" href="/#contact-container">Contact Us</a>
                <a className="header-link button" href="/">Sponsorships</a>
            </div>
        </div>
    )
}