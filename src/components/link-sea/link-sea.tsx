// basic nextjs component template for the IEEE links

import React from "react";
import "./link-sea.css";

export default function LinkSea() {
    return (
        <div id="linksea-container">
            <div id="linksea-links-container">
                <a className="linksea-link" target="_blank" href="https://ieeeconcordia.ca">IEEE Concordia</a>
                <a className="linksea-link" target="_blank" href="https://ieee.org">IEEE.org</a>
                <a className="linksea-link" target="_blank" href="https://www.ieeeconcordia.ca/events">Events</a>
            </div>
            {/* <div className="flex align-middle justify-center">
                <p className="linksea-ieee-title">IEEE</p>
            </div> */}
            {/* <div className="flex align-middle justify-center">
                <div className="bg-white rounded-full aspect-square flex align-middle justify-center">
                    <Image src="/images/ieee-logo-blue.png" width={64} height={64} alt="IEEE logo" />
                </div>
            </div> */}
        </div>
    );
}