import React, { useState, useEffect } from 'react';
import "./Navbar.css";

function Navbar() {

    const [show, handleshow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true);
            } else handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_log"
                src="https://en.wikipedia.org/wiki/Netflix#/media/File:Netflix_2015_logo.svg"
                alt="Netlifx logo" />

            <img className="nav_avatar"
                src="https://pbs.twimg.com/profile_images/124011999041155"
                alt="Netflix Logo" />
        </div>
    )
}

export default Navbar
