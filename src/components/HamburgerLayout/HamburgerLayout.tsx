import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import HamburgerBackdrop from '../HamburgerBackdrop/HamburgerBackdrop';
import './HamburgerLayout.scss';
const HamburgerLayout = (props: any) => {

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
            <Toolbar hamburgerButtonClickHandler={hamburgerButtonClickHandler} />
            {/* {hamburgerMenu} */}
            <HamburgerMenu
                hamburgerMenuCloseClickHandler={hamburgerMenuCloseClickHandler}
                isOpen={isHamburgerMenuOpen} />
            <HamburgerBackdrop isOpen={isHamburgerMenuOpen} backdropAreaClickHandler={backdropAreaClickHandler} />
            {/* {hamburgerBackdrop} */}
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus veniam distinctio ad ut non?
                Iste veniam itaque fugit nemo, commodi
                id culpa quod, minus omnis pariatur aperiam,
          cumque voluptates repellendus!</p>
            </main>
        </>
    );
}

export default HamburgerLayout;