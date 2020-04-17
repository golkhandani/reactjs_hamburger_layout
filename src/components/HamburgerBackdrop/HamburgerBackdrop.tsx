import React from 'react';
import './HamburgerBackdrop.scss'
const HamburgerBackdrop = (props: { backdropAreaClickHandler: any, isOpen: boolean }) => {
    let classNames = ['backdrop'];
    if (props.isOpen) {
        classNames = ['backdrop', 'open']
    }
    return (
        <div className={classNames.join(' ')} onClick={props.backdropAreaClickHandler}></div>
    )
}

export default HamburgerBackdrop;