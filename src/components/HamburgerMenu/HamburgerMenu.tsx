import React from 'react';
import './HamburgerMenu.scss';
import { RouteObject } from '../../interfaces/routerObject.interface';
const HamburgerMenu = (props: { isOpen: boolean, hamburgerMenuCloseClickHandler: any, links: RouteObject[] }) => {
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
                {
                    props.links.map(link => {
                        return (
                            <li key={link.name}>
                                <a href={link.path}>{link.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default HamburgerMenu;