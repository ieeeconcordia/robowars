// basic nextjs component template for the date counter

"use client";

import React, { useEffect, useRef } from "react";
import { setInterval } from "timers";

import "./date-counter.css";

export default function DateCounter({ eventDate }: { eventDate: Date }) {
    const locale = 'en-US';
    const numberFormat = { minimumIntegerDigits: 2 };

    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    let isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        updateCountDown();

        const countDownTimeout = setInterval(updateCountDown, 1000);

        return () => {
            isMounted.current = false;
            clearInterval(countDownTimeout);
        };
    });

    function updateCountDown() {
        const { days, hours, minutes, seconds } = calculateCountDown(eventDate);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }

    function calculateCountDown(targetDate: Date) {
        if (targetDate == undefined) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        const now = new Date();

        const timeLeft = targetDate.getTime() - now.getTime();

        const tempDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const tempHours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const tempMinutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const tempSeconds = Math.floor((timeLeft / 1000) % 60);

        return { days: tempDays, hours: tempHours, minutes: tempMinutes, seconds: tempSeconds };
    }

    return (
        <div id="date-counter-container">
            <div id="date-counter-days" className="piece">
                <p className="count">{days.toLocaleString(locale, numberFormat)}</p>
                <p className="title">Days</p>
            </div>

            <div id="date-counter-hours" className="piece">
                <p className="count">{hours.toLocaleString(locale, numberFormat)}</p>
                <p className="title">Hours</p>
            </div>

            <div id="date-counter-minutes" className="piece">
                <p className="count">{minutes.toLocaleString(locale, numberFormat)}</p>
                <p className="title">Minutes</p>
            </div>

            <div id="date-counter-seconds" className="piece">
                <p className="count">{seconds.toLocaleString(locale, numberFormat)}</p>
                <p className="title">Seconds</p>
            </div>
        </div>
    );
}