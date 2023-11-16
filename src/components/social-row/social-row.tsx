// basic nextjs component template for the IEEE links

import React from "react";
import { SocialIcon } from "react-social-icons";

import "./social-row.css";

export default function SocialRow() {
    return (
        <div id="social-row-container">
            <SocialIcon target="_blank" url="https://www.instagram.com/ieee_concordia/" />
            <SocialIcon target="_blank" url="https://www.facebook.com/ieeeconcordia" />
            <SocialIcon target="_blank" url="https://discord.gg/uYw94MGjqv" />
        </div>
    );
}