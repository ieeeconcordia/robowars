// basic nextjs component template for a footer

import React from 'react';
import Image from 'next/image';
import SocialRow from "@/components/social-row/social-row";
import './footer.css';

export default function Footer() {
    return (
        <div id="footer-container">
            <div id="footer-ieee-container">
                <Image src="/images/ieee-logo-white.png" width={64} height={64} alt="IEEE logo" />
                <p>IEEE Concordia</p>
            </div>

            <div id="footer-info-container">
                <div className='info-piece-container'>
                    <p className='info-piece-title'>Address</p>
                    <p className='info-piece-content'>2160 Bishop St #204, <br />Montreal, Quebec H3G 2E9</p>
                </div>
                <div className='info-piece-container'>
                    <p className='info-piece-title'>Ask any questions @</p>
                    <p className='info-piece-content'>info@ieeeconcordia.ca</p>
                </div>
            </div>

            <SocialRow />

            <div id="footer-copyright-container">
                <p>©2025 IEEE Concordia. All rights reserved.</p>
            </div>
        </div>
    )
}
