import React from "react";
import { useState } from 'react';

function Header({ fetchNews }) {
    const [country, setcountry] = useState("in");

    return (
        <header className="header">
            <div className="header-logo">
                <h1 className="logo-title">TIMES OF</h1>
                <select aria-label="choose your country" className="logo-dropdown" onChange={(event) => setcountry(event.target.value)}>
                    <option value="in">INDIA</option>
                    <option value="us">US</option>
                </select>
            </div>
            <div className="header-category">
                <input className="header-button" type="button" value="Business" onClick={() => fetchNews(country, "business")} />
                <input className="header-button" type="button" value="Health" onClick={() => fetchNews(country, "health")} />
                <input className="header-button" type="button" value="General" onClick={() => fetchNews(country, "general")} />
            </div>
        </header>

    );
}

export default Header;