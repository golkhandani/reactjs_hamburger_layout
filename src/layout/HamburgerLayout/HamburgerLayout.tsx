import React, { useState } from 'react';

import './HamburgerLayout.scss';
import Toolbar from '../../components/Toolbar/Toolbar';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import HamburgerBackdrop from '../../components/HamburgerBackdrop/HamburgerBackdrop';
const HamburgerLayout = (props: { children: any, routes: any[] }) => {

    const [isHamburgerMenuOpen, set_isHamburgerMenuOpen] = useState(false)

    const hamburgerButtonClickHandler = () => {
        set_isHamburgerMenuOpen((prevState) => {
            return !prevState;
        })
    }

    const hamburgerMenuCloseClickHandler = () => {
        hamburgerButtonClickHandler();
    }

    const backdropAreaClickHandler = () => {
        hamburgerButtonClickHandler();
    }



    // more performant but no animation
    // let hamburgerMenu = null;
    // let hamburgerBackdrop = null;
    // if (isHamburgerMenuOpen) {
    //     // hamburgerMenu = <HamburgerMenu />
    //     hamburgerBackdrop = <HamburgerBackdrop isOpen={false} backdropAreaClickHandler={backdropAreaClickHandler} />
    // }
    return (
        <>
            <Toolbar
                links={props.routes}
                hamburgerButtonClickHandler={hamburgerButtonClickHandler} />

            {/* {hamburgerBackdrop} */}
            <HamburgerBackdrop
                isOpen={isHamburgerMenuOpen}
                backdropAreaClickHandler={backdropAreaClickHandler} />

            {/* {hamburgerMenu} */}
            <HamburgerMenu
                links={props.routes}
                hamburgerMenuCloseClickHandler={hamburgerMenuCloseClickHandler}
                isOpen={isHamburgerMenuOpen} />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default HamburgerLayout;