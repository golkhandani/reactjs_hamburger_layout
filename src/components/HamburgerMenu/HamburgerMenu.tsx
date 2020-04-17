import React from 'react';
import './HamburgerMenu.scss';
const HamburgerMenu = (props: { isOpen: boolean, hamburgerMenuCloseClickHandler: any }) => {
    let classNames = ['HamburgerMenu'];
    if (props.isOpen) {
        classNames = ['HamburgerMenu', 'open']
    }
    return (
        <nav className={classNames.join(' ')}>
            <div className="closeBtn" onClick={props.hamburgerMenuCloseClickHandler}>
                <button>X</button>
            </div>
            <ul>
                <li>
                    <a href="/">products</a>
                </li>
                <li>
                    <a href="/">users</a>
                </li>
            </ul>
        </nav>
    );
};

export default HamburgerMenu;