import React from "react";
import './Toolbar.scss';
import HamburgerButton from "../HamburgerButton/HamburgerButton";

const Toolbar = (props: { hamburgerButtonClickHandler: any }) => {
    return (
        <header className="toolbar">
            <nav className="toolbar-nav">
                {/* hamburgerBtn */}
                <div className="nav-btn">
                    <HamburgerButton click={props.hamburgerButtonClickHandler} />
                </div>
                {/* logo */}
                <div className="nav-logo">
                    <a href="/">logo</a>
                </div>

                {/* element */}
                <div className="nav-items">
                    <ul>
                        <li>
                            <a href="/">products</a>
                        </li>
                        <li>
                            <a href="/">users</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;