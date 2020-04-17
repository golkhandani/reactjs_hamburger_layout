import React from "react";
import './HamburgerButton.scss';

const HamburgerButton = (props: { click: any }) => {
    return (
        <button className="hamburgerButton" onClick={props.click}>
            <div className="hamburgerButtonLine"></div>
            <div className="hamburgerButtonLine"></div>
            <div className="hamburgerButtonLine"></div>
        </button>
    )
};

export default HamburgerButton;