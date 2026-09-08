import React from "react";

const AnimatedText = () => {
return (
    <>
        <span>
            <svg width="360" height="360" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="ballGradient" cx="35%" cy="25%" r="75%">
                        <stop offset="0%" stop-color="var(--color_1)"/>
                        <stop offset="35%" stop-color="var(--color_2)"/>
                        <stop offset="70%" stop-color="var(--color_3)"/>
                        <stop offset="100%" stop-color="var(--color_4)"/>
                    </radialGradient>
                    <radialGradient id="edgeGradient" cx="30%" cy="20%" r="85%">
                        <stop offset="70%" stop-color="var(--color_5)" stop-opacity="0"/>
                        <stop offset="90%" stop-color="var(--color_6)" stop-opacity=".35"/>
                        <stop offset="100%" stop-color="var(--color_7)" stop-opacity=".8"/>
                    </radialGradient>
                    <linearGradient id="highlightGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#FFFFFF" stop-opacity=".9"/>
                        <stop offset="35%" stop-color="var(--color_8)" stop-opacity=".35"/>
                        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
                    </linearGradient>
                    <radialGradient id="shadowGradient">
                        <stop offset="0%" stop-color="#777" stop-opacity=".35"/>
                        <stop offset="60%" stop-color="#999" stop-opacity=".15"/>
                        <stop offset="100%" stop-color="#FFF" stop-opacity="0"/>
                    </radialGradient>
                    <filter id="blurShadow" x="-50%" y="-100%" width="200%" height="300%">
                        <feGaussianBlur stdDeviation="7"/>
                    </filter>
                    <filter id="ballShadow" x="-30%" y="-30%" width="160%" height="180%">
                        <feDropShadow dx="4" dy="7" stdDeviation="5" flood-color="#8A6A00" flood-opacity=".35"/>
                    </filter>
                </defs>
                <rect width="360" height="360" fill="none"/>
                <ellipse cx="180" cy="337" rx="120" ry="13" fill="url(#shadowGradient)" filter="url(#blurShadow)"/>
                <circle cx="180" cy="168" r="164" fill="url(#ballGradient)" filter="url(#ballShadow)" />
                <circle cx="180" cy="168" r="164" fill="url(#edgeGradient)"/>
                <circle cx="180" cy="168" r="162" fill="none" stroke="var(--bs-themecolor)" stroke-width="5" />
                <path d="M 20 168 C 20 80 90 10 180 10 C 267 10 331 76 340 155" fill="none" stroke="url(#highlightGradient)" stroke-width="7" stroke-linecap="round" />
                <ellipse cx="125" cy="55" rx="85" ry="30" fill="var(--bs-themecolor)" opacity=".18" />
                <text x="180" y="223" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="150" font-weight="700" fill="#2A2A2A">L.</text>
            </svg>
        </span>
        <img src='./images/moving-text.svg' />
    </>
);
};

export default AnimatedText;