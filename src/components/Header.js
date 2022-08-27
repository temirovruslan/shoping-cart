import React from "react";

export default function Header() {
    return (
        <nav className="purple darken-4">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    Logo
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/Evgenyi-123/shop.git">
                            Git Hub
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}