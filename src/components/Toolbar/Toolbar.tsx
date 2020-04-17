import React from "react";
import './Toolbar.scss';
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { RouteObject } from '../../interfaces/routerObject.interface';

const Toolbar = (props: { hamburgerButtonClickHandler: any, links: RouteObject[] }) => {
    return (
        <header className="toolbar">
            <nav className="toolbar-nav">
                {/* hamburgerBtn */}
                <div className="nav-btn">
                    <HamburgerButton click={props.hamburgerButtonClickHandler} />
                </div>
                {/* logo */}
                <div className="nav-logo">
                    <a href="/"><strong>MIRAI</strong>naki</a>
                </div>

                {/* element */}
                <div className="nav-items">
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
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;